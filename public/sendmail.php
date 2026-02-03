<?php
// Enable error reporting for debugging (remove in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Set content type for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Function to sanitize input
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)));
}

// Function to validate email
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to validate phone number (basic validation)
function validatePhone($phone) {
    return preg_match('/^[\d\s\-\+\(\)]+$/', $phone);
}

// Function to send email using PHP mail function
function sendEmailBasic($to, $subject, $htmlBody, $fromEmail, $fromName, $replyTo) {
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/html; charset=UTF-8';
    $headers[] = 'From: ' . $fromName . ' <' . $fromEmail . '>';
    $headers[] = 'Reply-To: ' . $replyTo;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    
    $headerString = implode("\r\n", $headers);
    
    return mail($to, $subject, $htmlBody, $headerString);
}

try {
    // Check if request method is POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Only POST method is allowed');
    }

    // Get POST data
    $input = json_decode(file_get_contents('php://input'), true);
    
    // If JSON decode fails, try regular POST data
    if (!$input) {
        $input = $_POST;
    }

    // Validate required fields
    $name = isset($input['name']) ? sanitizeInput($input['name']) : '';
    $email = isset($input['email']) ? sanitizeInput($input['email']) : '';
    $phone = isset($input['phone']) ? sanitizeInput($input['phone']) : '';
    $service = isset($input['service']) ? sanitizeInput($input['service']) : '';
    $message = isset($input['message']) ? sanitizeInput($input['message']) : '';
    $date = isset($input['date']) ? sanitizeInput($input['date']) : '';

    // Validation
    if (empty($name)) {
        throw new Exception('Name is required');
    }

    if (empty($email) || !validateEmail($email)) {
        throw new Exception('Valid email is required');
    }

    if (!empty($phone) && !validatePhone($phone)) {
        throw new Exception('Valid phone number is required');
    }

    if (empty($message) && empty($service)) {
        throw new Exception('Either message or service selection is required');
    }

    // Email configuration
    $to = 'servicefirsthampton@gmail.com';
    $fromEmail = 'inquiryservicefirstau@gmail.com';
    $fromName = 'Service First Website';
    $subject = 'New Service Inquiry from ' . $name;

    // Create email body
    $emailBody = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Service Inquiry</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #007bff; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Service Inquiry</h1>
                <p>Service First Cooling Services</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Customer Name:</div>
                    <div class="value">' . htmlspecialchars($name) . '</div>
                </div>
                
                <div class="field">
                    <div class="label">Email Address:</div>
                    <div class="value">' . htmlspecialchars($email) . '</div>
                </div>';

    if (!empty($phone)) {
        $emailBody .= '
                <div class="field">
                    <div class="label">Phone Number:</div>
                    <div class="value">' . htmlspecialchars($phone) . '</div>
                </div>';
    }

    if (!empty($service)) {
        // Convert service value to readable format
        $serviceNames = [
            'split-system' => 'Split System Service',
            'evaporative-cooling' => 'Evaporative Cooling',
            'ducted-refrigeration' => 'Ducted Refrigeration',
            'emergency-repair' => 'Emergency Repair',
            'maintenance' => 'Regular Maintenance',
            'installation' => 'New Installation',
            'car-service' => 'Car Service',
            'car-wash' => 'Car Wash',
            'engine-oil' => 'Engine Oil',
            'motor-service' => 'Motor Cycle Service'
        ];
        
        $serviceName = isset($serviceNames[$service]) ? $serviceNames[$service] : htmlspecialchars($service);
        
        $emailBody .= '
                <div class="field">
                    <div class="label">Service Type:</div>
                    <div class="value">' . $serviceName . '</div>
                </div>';
    }

    if (!empty($date)) {
        $emailBody .= '
                <div class="field">
                    <div class="label">Preferred Date:</div>
                    <div class="value">' . htmlspecialchars($date) . '</div>
                </div>';
    }

    if (!empty($message)) {
        $emailBody .= '
                <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">' . nl2br(htmlspecialchars($message)) . '</div>
                </div>';
    }

    $emailBody .= '
                <div class="field">
                    <div class="label">Inquiry Time:</div>
                    <div class="value">' . date('Y-m-d H:i:s') . '</div>
                </div>
                
                <div class="field">
                    <div class="label">IP Address:</div>
                    <div class="value">' . $_SERVER['REMOTE_ADDR'] . '</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the Service First website contact form.</p>
                <p>Please respond to the customer at: ' . htmlspecialchars($email) . '</p>
            </div>
        </div>
    </body>
    </html>';

    // Send email using PHP's built-in mail function
    $emailSent = sendEmailBasic($to, $subject, $emailBody, $fromEmail, $fromName, $email);

    if ($emailSent) {
        // Success response
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your inquiry! We will get back to you within 24 hours.'
        ]);
    } else {
        throw new Exception('Failed to send email. Please try again later.');
    }

} catch (Exception $e) {
    // Error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>