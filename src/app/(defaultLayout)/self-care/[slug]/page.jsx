import BreadCumb from "@/app/Components/Common/BreadCumb";
import BrandErrorCodes from "@/app/Components/SelfCare/BrandErrorCodes";
import { notFound } from "next/navigation";

// Brands data with error codes - Only the 11 specified brands
const brands = [
  {
    name: "Daikin",
    slug: "daikin",
    description:
      "Daikin is a leading global air conditioning manufacturer known for energy-efficient and reliable systems.",
    errorCodes: [
      // A Series - External Protection/PCB Faults
      {
        code: "A0",
        description: "External protection device activated",
        details:
          "Check external safety devices, circuit breakers, and wiring connections. Reset if necessary.",
        severity: "medium",
      },
      {
        code: "A1",
        description: "PCB (printed circuit board) defect",
        details:
          "Main control board malfunction. Requires professional inspection and possible replacement.",
        severity: "high",
      },
      {
        code: "A3",
        description: "Drain pan full (overflowing)",
        details:
          "Check drain hose for blockages. Clean drain pan and ensure proper drainage.",
        severity: "medium",
      },
      {
        code: "A5",
        description: "Heat exchanger freeze protection",
        details:
          "System detected potential freezing conditions. Check refrigerant levels and airflow.",
        severity: "high",
      },
      {
        code: "A6",
        description: "Fan motor defect",
        details:
          "Indoor or outdoor fan motor malfunction. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "A7",
        description: "Swing motor fault",
        details:
          "Swing motor malfunction. Check motor operation and remove obstructions.",
        severity: "medium",
      },
      {
        code: "A8",
        description: "Overcurrent detection",
        details:
          "Excessive current detected. Check electrical connections and component operation.",
        severity: "high",
      },
      {
        code: "A9",
        description: "Electronic expansion valve fault",
        details:
          "EEV malfunction. Professional diagnosis and replacement required.",
        severity: "high",
      },
      {
        code: "AH",
        description: "Air purification unit fault",
        details:
          "Air purification system malfunction. Check unit operation and connections.",
        severity: "low",
      },
      {
        code: "C0",
        description: "Sensor fault (general)",
        details:
          "General sensor malfunction. Multiple sensors may need inspection.",
        severity: "medium",
      },
      {
        code: "C1",
        description: "Heat exchanger frost protection sensor",
        details:
          "Frost protection sensor malfunction. Check sensor and defrost operation.",
        severity: "medium",
      },
      {
        code: "C4",
        description: "Heat exchanger (indoor unit) sensor abnormality",
        details:
          "Temperature sensor on indoor heat exchanger is faulty. Sensor replacement required.",
        severity: "medium",
      },
      {
        code: "C5",
        description: "Heat exchanger (outdoor unit) sensor abnormality",
        details:
          "Temperature sensor on outdoor heat exchanger is faulty. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "C7",
        description:
          "Outdoor unit heat exchanger defrosting sensor abnormality",
        details:
          "Defrost sensor malfunction. May cause improper defrost operation in heat pump mode.",
        severity: "medium",
      },
      {
        code: "C9",
        description: "Outdoor unit suction air temperature sensor abnormality",
        details:
          "Ambient temperature sensor fault. Check sensor wiring and connections.",
        severity: "low",
      },
      {
        code: "CA",
        description: "Suction air temperature sensor fault",
        details:
          "Return air temperature sensor malfunction. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "CC",
        description: "Humidity sensor fault",
        details:
          "Humidity sensor malfunction. Check sensor operation and connections.",
        severity: "low",
      },
      {
        code: "CJ",
        description: "Remote controller temperature sensor fault",
        details:
          "Remote controller temperature sensor error. Check remote and sensor.",
        severity: "low",
      },
      {
        code: "E1",
        description: "Indoor unit PCB defect",
        details:
          "Indoor unit control board failure. Requires professional replacement.",
        severity: "high",
      },
      {
        code: "E3",
        description: "High pressure switch activation",
        details:
          "System pressure too high. Check for refrigerant overcharge or airflow restrictions.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Low pressure switch activation",
        details:
          "System pressure too low. Check for refrigerant leaks or undercharge.",
        severity: "high",
      },
      {
        code: "E5",
        description: "Outdoor unit motor overcurrent",
        details:
          "Outdoor fan motor drawing excessive current. Check for mechanical obstructions.",
        severity: "high",
      },
      {
        code: "E6",
        description: "Compressor motor lock or overcurrent",
        details:
          "Compressor fault. Immediate professional attention required to prevent damage.",
        severity: "critical",
      },
      {
        code: "E7",
        description: "Outdoor unit fan motor lock or overcurrent",
        details:
          "Outdoor fan motor jammed or overloaded. Check for debris and motor operation.",
        severity: "high",
      },
      {
        code: "E8",
        description: "Overcurrent detected",
        details:
          "General overcurrent condition. Check electrical connections and component operation.",
        severity: "high",
      },
      {
        code: "E9",
        description: "Electronic expansion valve fault",
        details:
          "EEV circuit malfunction. Professional diagnosis and repair required.",
        severity: "high",
      },
      {
        code: "F3",
        description: "Discharge pipe temperature too high",
        details:
          "Compressor discharge temperature excessive. Check refrigerant charge and system operation.",
        severity: "high",
      },
      {
        code: "F6",
        description: "Refrigerant pressure too high",
        details:
          "High pressure fault. System may have overcharge or blocked condenser.",
        severity: "high",
      },
      {
        code: "H0",
        description: "Sensor abnormality",
        details: "General sensor fault. Multiple sensors may need inspection.",
        severity: "medium",
      },
      {
        code: "H1",
        description: "Defrost sensor fault",
        details:
          "Defrost sensor malfunction. Check sensor and defrost operation.",
        severity: "medium",
      },
      {
        code: "H3",
        description: "High pressure switch fault",
        details:
          "High pressure switch malfunction or activation. Check system pressures.",
        severity: "high",
      },
      {
        code: "H4",
        description: "Low pressure switch fault",
        details:
          "Low pressure switch malfunction. Check refrigerant levels and switch operation.",
        severity: "medium",
      },
      {
        code: "H6",
        description: "Position detection sensor fault",
        details:
          "Sensor position error. Recalibration or replacement may be required.",
        severity: "medium",
      },
      {
        code: "H7",
        description: "Fan position sensor fault",
        details:
          "Fan position detection error. Check fan motor and sensor operation.",
        severity: "medium",
      },
      {
        code: "H8",
        description: "CT (current transformer) abnormality",
        details:
          "Current sensing circuit fault. Professional electrical diagnosis required.",
        severity: "medium",
      },
      {
        code: "H9",
        description: "Outdoor air temperature sensor abnormality",
        details:
          "Outdoor ambient sensor fault. Check sensor and wiring connections.",
        severity: "low",
      },
      {
        code: "J3",
        description: "Discharge pipe temperature sensor abnormality",
        details: "Temperature sensor on compressor discharge line is faulty.",
        severity: "medium",
      },
      {
        code: "J6",
        description: "Heat exchanger temperature sensor abnormality",
        details:
          "Heat exchanger temperature sensor malfunction. Affects system efficiency.",
        severity: "medium",
      },
      {
        code: "J7",
        description: "Suction pipe temperature sensor fault",
        details:
          "Suction line temperature sensor malfunction. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "J8",
        description: "Liquid pipe temperature sensor fault",
        details:
          "Liquid line temperature sensor malfunction. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "L3",
        description: "Electrical box temperature rise",
        details:
          "Control box overheating. Check ventilation and electrical connections.",
        severity: "high",
      },
      {
        code: "L4",
        description: "Inverter radiator temperature rise",
        details:
          "Inverter heat sink overheating. Check cooling and component operation.",
        severity: "high",
      },
      {
        code: "L5",
        description: "Compressor motor temperature rise",
        details:
          "Compressor overheating. Check refrigerant levels and system operation.",
        severity: "critical",
      },
      {
        code: "L8",
        description: "Inverter circuit overheating",
        details:
          "Inverter circuit overheating. Check cooling system and ventilation.",
        severity: "high",
      },
      {
        code: "LC",
        description: "Refrigerant line temperature sensor fault",
        details:
          "Refrigerant line sensor malfunction. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "Phase detection abnormality",
        details:
          "Electrical phase sequence error. Check power supply connections.",
        severity: "medium",
      },
      {
        code: "P3",
        description: "Electrical box temperature sensor fault",
        details:
          "Control box temperature sensor malfunction. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "P4",
        description: "Inverter radiator temperature sensor abnormality",
        details: "Temperature sensor on inverter heat sink is faulty.",
        severity: "medium",
      },
      {
        code: "P7",
        description: "Outdoor unit total current sensor fault",
        details:
          "Current sensor malfunction. Check electrical connections and sensor.",
        severity: "medium",
      },
      {
        code: "PJ",
        description: "Compressor overload or overcurrent",
        details:
          "Compressor protection activated. System requires immediate professional attention.",
        severity: "critical",
      },
      {
        code: "U0",
        description: "Refrigerant shortage",
        details:
          "Low refrigerant detected. Check for leaks and recharge system if needed.",
        severity: "high",
      },
      {
        code: "U1",
        description: "Reverse phase or phase loss",
        details:
          "Power supply phase error. Check electrical connections and phase sequence.",
        severity: "medium",
      },
      {
        code: "U2",
        description: "Voltage drop or power supply abnormality",
        details:
          "Insufficient power supply voltage. Check electrical connections and supply voltage.",
        severity: "medium",
      },
      {
        code: "U3",
        description: "Control signal error",
        details:
          "Control signal malfunction. Check control board and connections.",
        severity: "medium",
      },
      {
        code: "U4",
        description: "Communication abnormality",
        details:
          "Communication error between indoor and outdoor units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "U5",
        description: "Remote control reception error",
        details:
          "Remote control signal error. Check remote control and receiver.",
        severity: "low",
      },
      {
        code: "U7",
        description: "Remote controller communication error",
        details:
          "Remote controller communication fault. Check controller and connections.",
        severity: "low",
      },
      {
        code: "U8",
        description: "Main remote controller and sub controller conflict",
        details:
          "Controller conflict detected. Check controller settings and connections.",
        severity: "low",
      },
      {
        code: "UA",
        description: "Central control and local control conflict",
        details:
          "Control system conflict. Check control settings and operation.",
        severity: "low",
      },
      {
        code: "UF",
        description: "Gas shortage",
        details:
          "Refrigerant shortage detected. Professional leak detection and recharge required.",
        severity: "high",
      },
      {
        code: "UH",
        description: "System setting error",
        details:
          "System configuration error. Check system settings and parameters.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Mitsubishi Electric",
    slug: "mitsubishi",
    description:
      "Mitsubishi Electric offers premium air conditioning solutions with advanced inverter technology.",
    errorCodes: [
      {
        code: "E1",
        description: "PCB fault (indoor unit)",
        details:
          "Indoor unit control board malfunction. Professional replacement required.",
        severity: "high",
      },
      {
        code: "E2",
        description: "PCB fault (outdoor unit)",
        details:
          "Outdoor unit control board failure. Requires professional diagnosis.",
        severity: "high",
      },
      {
        code: "E3",
        description: "High pressure switch",
        details:
          "High pressure protection activated. Check system pressures and refrigerant charge.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Low pressure switch",
        details:
          "Low pressure protection activated. Check for refrigerant leaks or undercharge.",
        severity: "high",
      },
      {
        code: "E5",
        description: "Outdoor temperature sensor",
        details:
          "Outdoor ambient temperature sensor fault. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "E6",
        description: "Indoor temperature sensor",
        details:
          "Indoor temperature sensor malfunction. Affects temperature control accuracy.",
        severity: "medium",
      },
      {
        code: "E7",
        description: "Indoor fan motor",
        details:
          "Indoor fan motor fault. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "E8",
        description: "Overcurrent",
        details:
          "System overcurrent detected. Check electrical connections and components.",
        severity: "high",
      },
      {
        code: "E9",
        description: "Electronic expansion valve fault",
        details:
          "EEV malfunction detected. Professional diagnosis and replacement required.",
        severity: "high",
      },
      {
        code: "E10",
        description: "Communication error between units",
        details:
          "Communication fault between indoor and outdoor units. Check wiring.",
        severity: "medium",
      },
      {
        code: "E11",
        description: "Drain pump error",
        details:
          "Drain pump malfunction. Check pump operation and drainage system.",
        severity: "medium",
      },
      {
        code: "E12",
        description: "Heat exchanger freeze protection",
        details:
          "Indoor coil freeze protection activated. Check airflow and filters.",
        severity: "medium",
      },
      {
        code: "E13",
        description: "Compressor lock detection",
        details:
          "Compressor mechanical lock detected. Immediate professional attention required.",
        severity: "critical",
      },
      {
        code: "E14",
        description: "Compressor overcurrent",
        details:
          "Compressor drawing excessive current. Professional diagnosis required.",
        severity: "critical",
      },
      {
        code: "E15",
        description: "Fan motor overcurrent",
        details:
          "Fan motor overcurrent protection. Check motor and electrical connections.",
        severity: "high",
      },
      {
        code: "E16",
        description: "Current sensor fault",
        details:
          "Current sensing circuit malfunction. Check electrical connections.",
        severity: "medium",
      },
      {
        code: "E17",
        description: "Outdoor heat exchanger sensor fault",
        details:
          "Outdoor coil temperature sensor malfunction. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "E18",
        description: "Indoor heat exchanger sensor fault",
        details:
          "Indoor coil temperature sensor error. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "E19",
        description: "Discharge temperature sensor fault",
        details: "Compressor discharge temperature sensor malfunction.",
        severity: "medium",
      },
      {
        code: "E20",
        description: "Suction temperature sensor fault",
        details:
          "Suction line temperature sensor error. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "Power supply voltage",
        details:
          "Power supply voltage abnormality. Check electrical supply and connections.",
        severity: "medium",
      },
      {
        code: "P2",
        description: "Power supply frequency fault",
        details:
          "Power supply frequency error. Check electrical supply stability.",
        severity: "medium",
      },
      {
        code: "P3",
        description: "High temperature",
        details:
          "System overheating detected. Check airflow and refrigerant levels.",
        severity: "high",
      },
      {
        code: "P4",
        description: "Low pressure",
        details:
          "Low pressure fault. Check for refrigerant leaks or undercharge.",
        severity: "high",
      },
      {
        code: "P5",
        description: "Compressor motor current",
        details:
          "Compressor overcurrent protection. Professional diagnosis required.",
        severity: "critical",
      },
      {
        code: "P6",
        description: "Communication error",
        details:
          "Communication fault between units. Check connecting cables and connections.",
        severity: "medium",
      },
      {
        code: "P7",
        description: "Inverter fault",
        details: "Inverter circuit malfunction. Professional repair required.",
        severity: "high",
      },
      {
        code: "P8",
        description: "Heat sink temperature fault",
        details: "Heat sink overheating. Check cooling system and ventilation.",
        severity: "high",
      },
      {
        code: "P9",
        description: "Outdoor fan motor fault",
        details:
          "Outdoor fan motor malfunction. Check motor operation and obstructions.",
        severity: "high",
      },
      {
        code: "P10",
        description: "Defrost sensor fault",
        details:
          "Defrost sensor malfunction. Check sensor and defrost operation.",
        severity: "medium",
      },
    ],
  },

  {
    name: "Panasonic",
    slug: "panasonic",
    description:
      "Panasonic air conditioners offer reliable performance with nanoe-X technology for air purification.",
    errorCodes: [
      {
        code: "F10",
        description: "Communication error",
        details:
          "Communication fault between indoor and outdoor units. Check wiring connections.",
        severity: "medium",
      },
      {
        code: "F11",
        description: "Outdoor temperature sensor",
        details:
          "Outdoor ambient temperature sensor error. Check sensor and connections.",
        severity: "low",
      },
      {
        code: "F12",
        description: "Indoor temperature sensor",
        details:
          "Indoor temperature sensor malfunction. Affects temperature control.",
        severity: "medium",
      },
      {
        code: "F13",
        description: "Outdoor coil sensor",
        details: "Outdoor heat exchanger temperature sensor fault.",
        severity: "medium",
      },
      {
        code: "F14",
        description: "Indoor coil sensor",
        details: "Indoor heat exchanger temperature sensor error.",
        severity: "medium",
      },
      {
        code: "F15",
        description: "Compressor temperature sensor",
        details:
          "Compressor temperature sensor malfunction. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "F20",
        description: "High pressure protection",
        details:
          "High pressure switch activated. Check system pressures and airflow.",
        severity: "high",
      },
      {
        code: "F22",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "F23",
        description: "Compressor overcurrent",
        details:
          "Compressor overcurrent protection. Professional diagnosis required.",
        severity: "critical",
      },
      {
        code: "F24",
        description: "Fan motor error",
        details: "Fan motor malfunction detected. Check motor and connections.",
        severity: "high",
      },
      {
        code: "F25",
        description: "Power supply error",
        details: "Power supply voltage abnormality. Check electrical supply.",
        severity: "medium",
      },
      {
        code: "F26",
        description: "Inverter error",
        details: "Inverter circuit malfunction. Professional repair required.",
        severity: "high",
      },
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    description:
      "Samsung air conditioners feature Digital Inverter technology for energy efficiency and quiet operation.",
    errorCodes: [
      {
        code: "E1 01",
        description: "Indoor temperature sensor error",
        details:
          "Room temperature sensor malfunction. Check sensor and wiring connections.",
        severity: "medium",
      },
      {
        code: "E1 02",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional replacement may be needed.",
        severity: "medium",
      },
      {
        code: "E1 21",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor ambient temperature sensor failure. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E1 22",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor malfunction. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "E2 01",
        description: "Communication error",
        details:
          "Communication fault between units. Check connecting cables and terminals.",
        severity: "medium",
      },
      {
        code: "E4 01",
        description: "Outdoor unit PCB error",
        details:
          "Outdoor unit control board malfunction. Professional replacement required.",
        severity: "high",
      },
      {
        code: "E4 21",
        description: "High pressure error",
        details:
          "High pressure protection activated. Check system pressures and refrigerant.",
        severity: "high",
      },
      {
        code: "E4 22",
        description: "Low pressure error",
        details:
          "Low pressure protection activated. Check for refrigerant leaks.",
        severity: "high",
      },
      {
        code: "E4 61",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "E4 81",
        description: "Compressor error",
        details:
          "Compressor malfunction detected. Immediate professional attention required.",
        severity: "critical",
      },
    ],
  },
  {
    name: "Fujitsu",
    slug: "fujitsu",
    description:
      "Fujitsu air conditioners provide reliable comfort with advanced inverter technology and smart controls.",
    errorCodes: [
      {
        code: "Error 01",
        description: "High pressure switch",
        details:
          "High pressure protection activated. Check system pressures and airflow restrictions.",
        severity: "high",
      },
      {
        code: "Error 02",
        description: "Low pressure switch",
        details:
          "Low pressure protection activated. Check refrigerant levels and leaks.",
        severity: "high",
      },
      {
        code: "Error 03",
        description: "Compressor overcurrent",
        details:
          "Compressor drawing excessive current. Professional diagnosis required.",
        severity: "critical",
      },
      {
        code: "Error 04",
        description: "System malfunction",
        details:
          "General system fault detected. Comprehensive professional diagnosis needed.",
        severity: "high",
      },
      {
        code: "Error 05",
        description: "Outdoor temperature sensor",
        details:
          "Outdoor temperature sensor malfunction. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "Error 06",
        description: "Indoor temperature sensor",
        details:
          "Indoor temperature sensor error. Affects temperature control accuracy.",
        severity: "medium",
      },
      {
        code: "Error 07",
        description: "Communication error",
        details:
          "Communication fault between units. Check wiring and connections.",
        severity: "medium",
      },
      {
        code: "Error 08",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical supply and connections.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Carrier",
    slug: "carrier",
    description:
      "Carrier air conditioning systems deliver premium comfort with innovative technology and reliability.",
    errorCodes: [
      {
        code: "E0",
        description: "Communication error",
        details:
          "Communication fault between indoor and outdoor units. Check connections.",
        severity: "medium",
      },
      {
        code: "E1",
        description: "Indoor temperature sensor",
        details:
          "Indoor temperature sensor malfunction. Check sensor and wiring.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Outdoor temperature sensor",
        details: "Outdoor temperature sensor error. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E3",
        description: "Indoor coil sensor",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "E4",
        description: "Outdoor coil sensor",
        details: "Outdoor heat exchanger sensor malfunction.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "High pressure protection",
        details: "High pressure switch activated. Check system pressures.",
        severity: "high",
      },
      {
        code: "E6",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "E7",
        description: "Compressor protection",
        details:
          "Compressor protection activated. Professional attention required.",
        severity: "critical",
      },
      {
        code: "E8",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check motor operation and obstructions.",
        severity: "high",
      },
      {
        code: "E9",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical connections.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Toshiba",
    slug: "toshiba",
    description:
      "Toshiba air conditioners feature cutting-edge inverter technology for efficient and quiet operation.",
    errorCodes: [
      {
        code: "E01",
        description: "Indoor PCB error",
        details:
          "Indoor unit control board malfunction. Professional replacement required.",
        severity: "high",
      },
      {
        code: "E02",
        description: "Indoor temperature sensor",
        details:
          "Indoor temperature sensor error. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "E03",
        description: "Indoor coil sensor",
        details:
          "Indoor heat exchanger sensor fault. Replacement may be needed.",
        severity: "medium",
      },
      {
        code: "E04",
        description: "Indoor fan motor error",
        details:
          "Indoor fan motor malfunction. Check motor and remove obstructions.",
        severity: "high",
      },
      {
        code: "E05",
        description: "Communication error",
        details: "Communication fault between units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "E06",
        description: "Outdoor temperature sensor",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E07",
        description: "Outdoor coil sensor",
        details:
          "Outdoor heat exchanger sensor error. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "E08",
        description: "Compressor protection",
        details:
          "Compressor protection activated. Immediate professional attention required.",
        severity: "critical",
      },
      {
        code: "E09",
        description: "High pressure protection",
        details:
          "High pressure switch activated. Check system pressures and airflow.",
        severity: "high",
      },
      {
        code: "E10",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
    ],
  },
  {
    name: "Hitachi",
    slug: "hitachi",
    description:
      "Hitachi air conditioners deliver reliable performance with advanced features for home comfort.",
    errorCodes: [
      {
        code: "01",
        description: "Indoor temperature sensor error",
        details:
          "Room temperature sensor malfunction. Check sensor and wiring connections.",
        severity: "medium",
      },
      {
        code: "02",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional replacement may be required.",
        severity: "medium",
      },
      {
        code: "03",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor ambient temperature sensor failure. Check sensor operation.",
        severity: "low",
      },
      {
        code: "04",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor malfunction. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "05",
        description: "Communication error",
        details:
          "Communication fault between units. Check connecting cables and terminals.",
        severity: "medium",
      },
      {
        code: "06",
        description: "High pressure error",
        details:
          "High pressure protection activated. Check system pressures and refrigerant.",
        severity: "high",
      },
      {
        code: "07",
        description: "Low pressure error",
        details:
          "Low pressure protection activated. Check for refrigerant leaks.",
        severity: "high",
      },
      {
        code: "08",
        description: "Compressor error",
        details:
          "Compressor malfunction detected. Immediate professional attention required.",
        severity: "critical",
      },
      {
        code: "09",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "10",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical supply and connections.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Sharp",
    slug: "sharp",
    description:
      "Sharp air conditioners feature Plasmacluster technology for air purification and comfort.",
    errorCodes: [
      {
        code: "F1",
        description: "Indoor temperature sensor",
        details:
          "Indoor temperature sensor error. Check sensor and wiring connections.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Indoor coil sensor",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "F3",
        description: "Outdoor temperature sensor",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "F4",
        description: "Outdoor coil sensor",
        details:
          "Outdoor heat exchanger sensor error. Professional replacement may be needed.",
        severity: "medium",
      },
      {
        code: "F5",
        description: "Communication error",
        details: "Communication fault between units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "F6",
        description: "High pressure protection",
        details:
          "High pressure switch activated. Check system pressures and airflow.",
        severity: "high",
      },
      {
        code: "F7",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "F8",
        description: "Compressor protection",
        details:
          "Compressor protection activated. Professional attention required.",
        severity: "critical",
      },
      {
        code: "F9",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "F10",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical connections.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Haier",
    slug: "haier",
    description:
      "Haier air conditioners offer affordable comfort solutions with reliable performance.",
    errorCodes: [
      {
        code: "E1",
        description: "Indoor temperature sensor error",
        details:
          "Room temperature sensor malfunction. Check sensor and wiring.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "E3",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E4",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor error. Professional replacement may be required.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Communication error",
        details:
          "Communication fault between units. Check connecting cables and terminals.",
        severity: "medium",
      },
      {
        code: "E6",
        description: "High pressure error",
        details: "High pressure protection activated. Check system pressures.",
        severity: "high",
      },
      {
        code: "E7",
        description: "Low pressure error",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "E8",
        description: "Compressor error",
        details:
          "Compressor malfunction detected. Professional attention required.",
        severity: "critical",
      },
      {
        code: "E9",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "F0",
        description: "Power supply error",
        details: "Power supply voltage abnormality. Check electrical supply.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Gree",
    slug: "gree",
    description:
      "Gree air conditioners provide energy-efficient cooling solutions with advanced inverter technology.",
    errorCodes: [
      {
        code: "E0",
        description: "Communication error",
        details:
          "Communication fault between indoor and outdoor units. Check connections.",
        severity: "medium",
      },
      {
        code: "E1",
        description: "High or low pressure protection",
        details:
          "Pressure protection activated. Check refrigerant levels and system pressures.",
        severity: "high",
      },
      {
        code: "E2",
        description: "Indoor coil freeze protection",
        details:
          "Indoor coil freeze protection activated. Check airflow and filters.",
        severity: "medium",
      },
      {
        code: "E3",
        description: "Indoor temperature sensor error",
        details:
          "Indoor temperature sensor malfunction. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "E4",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E6",
        description: "Communication error",
        details:
          "Communication fault between units. Check wiring and connections.",
        severity: "medium",
      },
      {
        code: "F0",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor error. Professional replacement may be needed.",
        severity: "medium",
      },
      {
        code: "F1",
        description: "Compressor discharge sensor error",
        details: "Compressor discharge temperature sensor fault.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Compressor suction sensor error",
        details: "Compressor suction temperature sensor malfunction.",
        severity: "medium",
      },
    ],
  },
  {
    name: "TCL",
    slug: "tcl",
    description:
      "TCL air conditioners offer modern design and reliable cooling performance for homes and offices.",
    errorCodes: [
      {
        code: "E1",
        description: "Indoor temperature sensor error",
        details:
          "Room temperature sensor malfunction. Check sensor and wiring connections.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "E3",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E4",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor error. Professional replacement may be required.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Communication error",
        details: "Communication fault between units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "E6",
        description: "High pressure protection",
        details:
          "High pressure switch activated. Check system pressures and airflow.",
        severity: "high",
      },
      {
        code: "E7",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "E8",
        description: "Compressor protection",
        details:
          "Compressor protection activated. Professional attention required.",
        severity: "critical",
      },
      {
        code: "E9",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "F1",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical connections.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Kelvinator",
    slug: "kelvinator",
    description:
      "Kelvinator air conditioners provide dependable cooling solutions for Australian homes.",
    errorCodes: [
      {
        code: "E1",
        description: "Indoor temperature sensor error",
        details:
          "Room temperature sensor malfunction. Check sensor and wiring.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "E3",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E4",
        description: "Communication error",
        details:
          "Communication fault between units. Check connecting cables and terminals.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "High pressure protection",
        details: "High pressure switch activated. Check system pressures.",
        severity: "high",
      },
      {
        code: "E6",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "E7",
        description: "Compressor protection",
        details:
          "Compressor protection activated. Professional attention required.",
        severity: "critical",
      },
      {
        code: "E8",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "F1",
        description: "Power supply error",
        details: "Power supply voltage abnormality. Check electrical supply.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "PCB error",
        details:
          "Control board malfunction. Professional replacement required.",
        severity: "high",
      },
    ],
  },
  {
    name: "Rheem",
    slug: "rheem",
    description:
      "Rheem air conditioners deliver efficient cooling and heating solutions for Australian conditions.",
    errorCodes: [
      {
        code: "E1",
        description: "Indoor temperature sensor error",
        details:
          "Room temperature sensor malfunction. Check sensor and wiring connections.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis needed.",
        severity: "medium",
      },
      {
        code: "E3",
        description: "Outdoor temperature sensor error",
        details:
          "Outdoor temperature sensor malfunction. Check sensor operation.",
        severity: "low",
      },
      {
        code: "E4",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor error. Professional replacement may be required.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Communication error",
        details: "Communication fault between units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "High pressure protection",
        details:
          "High pressure switch activated. Check system pressures and airflow.",
        severity: "high",
      },
      {
        code: "P2",
        description: "Low pressure protection",
        details: "Low pressure protection activated. Check refrigerant levels.",
        severity: "high",
      },
      {
        code: "P3",
        description: "Compressor protection",
        details:
          "Compressor protection activated. Professional attention required.",
        severity: "critical",
      },
      {
        code: "F1",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "F2",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical connections.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Braemar",
    slug: "braemar",
    description:
      "Braemar specializes in evaporative cooling systems designed for Australian climate conditions.",
    errorCodes: [
      // Sensor and Temperature Error Codes
      {
        code: "b5",
        description:
          "Indoor unit liquid valve temperature sensor open/short circuit",
        details:
          "Check liquid valve temperature sensor connections and wiring. Replace sensor if faulty.",
        severity: "medium",
      },
      {
        code: "b7",
        description:
          "Indoor unit liquid valve temperature sensor open/short circuit",
        details:
          "Inspect liquid valve temperature sensor for open or short circuit. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "F1",
        description: "Return air temperature sensor open/short circuit",
        details:
          "Check return air temperature sensor wiring and connections. Replace if damaged.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Evaporator temperature sensor open/short circuit",
        details:
          "Inspect evaporator temperature sensor for proper operation and connections.",
        severity: "medium",
      },
      {
        code: "F3",
        description: "Outdoor ambient temperature sensor open/short circuit",
        details:
          "Check outdoor ambient temperature sensor wiring. Replace if faulty.",
        severity: "low",
      },
      {
        code: "F4",
        description: "Outdoor mid-tube temperature sensor open/short circuit",
        details:
          "Inspect outdoor mid-tube temperature sensor connections and operation.",
        severity: "medium",
      },
      {
        code: "F5",
        description: "Discharge temperature sensor open/short circuit",
        details:
          "Check compressor discharge temperature sensor for proper operation.",
        severity: "medium",
      },
      {
        code: "P7",
        description: "IPM temperature sensor open/short circuit",
        details:
          "Inspect IPM temperature sensor wiring and connections. Professional replacement required.",
        severity: "medium",
      },
      {
        code: "Pd",
        description: "Sensor connection protection",
        details:
          "Multiple sensor connection issue detected. Check all sensor connections and wiring.",
        severity: "high",
      },
      {
        code: "PE",
        description: "Temperature drift protection",
        details:
          "Temperature sensor drift detected. Calibration or replacement may be required.",
        severity: "medium",
      },
      {
        code: "PF",
        description: "Drive board temperature sensor error",
        details:
          "Drive board temperature sensor malfunction. Professional diagnosis and repair required.",
        severity: "high",
      },

      // Communication and Control Error Codes
      {
        code: "dn",
        description: "Communication line misconnected/expansion valve error",
        details:
          "Check communication cables between units and expansion valve operation.",
        severity: "high",
      },
      {
        code: "E6",
        description: "Communication error",
        details:
          "Communication fault between indoor and outdoor units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "E7",
        description: "Running mode conflict",
        details:
          "System mode conflict detected. Check unit settings and operation mode.",
        severity: "medium",
      },
      {
        code: "P6",
        description: "Drive board communication error",
        details:
          "Communication error with drive board. Professional diagnosis required.",
        severity: "high",
      },
      {
        code: "LP",
        description: "Indoor & outdoor units unmatched",
        details:
          "Unit configuration mismatch. Check system compatibility and settings.",
        severity: "high",
      },

      // Compressor Protection Error Codes
      {
        code: "E1",
        description: "Compressor high-pressure protection",
        details:
          "High pressure protection activated. Check refrigerant levels and airflow restrictions.",
        severity: "high",
      },
      {
        code: "E3",
        description: "Compressor low-pressure protection",
        details:
          "Low pressure protection activated. Check for refrigerant leaks or undercharge.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Compressor high discharge temperature protection",
        details:
          "Compressor discharge temperature too high. Check refrigerant charge and system operation.",
        severity: "high",
      },
      {
        code: "H3",
        description: "Compressor overheating protection",
        details:
          "Compressor overheating detected. Check cooling and ventilation around unit.",
        severity: "critical",
      },
      {
        code: "H5",
        description: "IPM current protection",
        details:
          "IPM overcurrent protection activated. Professional diagnosis required.",
        severity: "critical",
      },
      {
        code: "H6",
        description: "Motor stalling",
        details:
          "Compressor motor stalling detected. Immediate professional attention required.",
        severity: "critical",
      },
      {
        code: "H7",
        description: "Compressor desynchronising protection",
        details:
          "Compressor synchronization error. Professional diagnosis and repair required.",
        severity: "critical",
      },
      {
        code: "HE",
        description: "Compressor demagnetization protection",
        details:
          "Compressor demagnetization detected. Professional replacement may be required.",
        severity: "critical",
      },
      {
        code: "Lc",
        description: "Compressor startup failure",
        details:
          "Compressor failed to start. Check power supply and compressor operation.",
        severity: "critical",
      },
      {
        code: "Ld",
        description: "Compressor phase loss/reversal protection",
        details:
          "Phase loss or reversal detected. Check electrical connections and phase sequence.",
        severity: "high",
      },
      {
        code: "LE",
        description: "Compressor stalling",
        details:
          "Compressor stalling protection activated. Professional diagnosis required.",
        severity: "critical",
      },

      // System Protection Error Codes
      {
        code: "E2",
        description: "Indoor anti-freeze protection",
        details:
          "Anti-freeze protection activated. Check airflow, filters, and refrigerant levels.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Whole unit over-current protection",
        details:
          "System overcurrent protection activated. Check electrical connections and components.",
        severity: "high",
      },
      {
        code: "E8",
        description: "Overload protection",
        details:
          "System overload protection activated. Check electrical supply and component operation.",
        severity: "high",
      },
      {
        code: "E9",
        description: "Indoor unit full water protection",
        details:
          "Water overflow protection activated. Check drainage system and water removal.",
        severity: "medium",
      },
      {
        code: "H1",
        description: "Forced defrosting",
        details:
          "System in forced defrost mode. Normal operation during cold weather conditions.",
        severity: "low",
      },
      {
        code: "Fo",
        description: "Pump-down",
        details:
          "System in pump-down mode. Normal operation during shutdown sequence.",
        severity: "low",
      },

      // Frequency and Power Protection
      {
        code: "En",
        description: "Frequency restricted/reduced with IPM current protection",
        details:
          "Operating frequency reduced due to IPM current protection. Check system load.",
        severity: "medium",
      },
      {
        code: "EU",
        description:
          "Frequency restricted/reduced with IPM temperature protection",
        details:
          "Operating frequency reduced due to IPM temperature protection. Check cooling.",
        severity: "medium",
      },
      {
        code: "FH",
        description: "Frequency restricted/reduced anti-freezing protection",
        details:
          "Operating frequency reduced for anti-freeze protection. Check airflow.",
        severity: "medium",
      },
      {
        code: "F6",
        description: "Frequency restricted/reduced with overload protection",
        details:
          "Operating frequency reduced due to overload protection. Check system load.",
        severity: "medium",
      },
      {
        code: "F8",
        description:
          "Frequency restricted/reduced with whole unit current protection",
        details:
          "Frequency reduced due to current protection. Check electrical connections.",
        severity: "medium",
      },
      {
        code: "F9",
        description:
          "Frequency restricted/reduced with high discharge temperature",
        details:
          "Frequency reduced due to high discharge temperature. Check refrigerant charge.",
        severity: "medium",
      },
      {
        code: "LF",
        description: "Over-speeding",
        details:
          "Motor over-speeding detected. Check motor control and electrical supply.",
        severity: "high",
      },

      // Electrical and Power Error Codes
      {
        code: "Hc",
        description: "Pfc protection",
        details:
          "Power factor correction protection activated. Check electrical supply and connections.",
        severity: "medium",
      },
      {
        code: "PH",
        description: "DC Bus over-voltage protection",
        details:
          "DC bus overvoltage detected. Check power supply voltage and electrical connections.",
        severity: "high",
      },
      {
        code: "PL",
        description: "DC Bus under-voltage protection",
        details:
          "DC bus undervoltage detected. Check power supply and electrical connections.",
        severity: "high",
      },
      {
        code: "PP",
        description: "AC input voltage abnormal",
        details:
          "AC input voltage outside normal range. Check electrical supply voltage.",
        severity: "medium",
      },
      {
        code: "PU",
        description: "Capacitor charging error",
        details:
          "Capacitor charging fault detected. Professional electrical diagnosis required.",
        severity: "high",
      },
      {
        code: "P5",
        description: "Over phase current protection",
        details:
          "Phase current exceeds safe limits. Check electrical connections and load.",
        severity: "high",
      },

      // System Faults
      {
        code: "F0",
        description: "System charge shortage/blockage protection",
        details:
          "Refrigerant shortage or system blockage detected. Check for leaks and restrictions.",
        severity: "high",
      },
      {
        code: "LA",
        description: "Outdoor fan 1 error protection",
        details:
          "Outdoor fan motor error detected. Check fan operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "L3",
        description: "Outdoor fan 1 error protection",
        details:
          "Outdoor fan motor malfunction. Check motor operation and electrical connections.",
        severity: "high",
      },
      {
        code: "L9",
        description: "Over-power protection",
        details:
          "System over-power protection activated. Check electrical supply and system load.",
        severity: "high",
      },
    ],
  },
  {
    name: "Bonaire",
    slug: "bonaire",
    description:
      "Bonaire offers evaporative cooling and ducted heating solutions for Australian homes.",
    errorCodes: [
      {
        code: "E1",
        description: "Water level error",
        details:
          "Water level sensor malfunction. Check water supply and sensor.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Water pump error",
        details: "Water pump malfunction. Check pump operation and water flow.",
        severity: "high",
      },
      {
        code: "E3",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Temperature sensor error",
        details: "Temperature sensor malfunction. Check sensor and wiring.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Control board error",
        details:
          "Control board malfunction. Professional replacement may be required.",
        severity: "high",
      },
      {
        code: "F1",
        description: "Water overflow",
        details:
          "Water overflow detected. Check drain system and water controls.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Low water level",
        details:
          "Low water level detected. Check water supply and connections.",
        severity: "medium",
      },
      {
        code: "F3",
        description: "Pad condition error",
        details:
          "Cooling pad condition sensor error. Check pads and water distribution.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "Power error",
        details:
          "Power supply abnormality. Check electrical connections and voltage.",
        severity: "medium",
      },
      {
        code: "P2",
        description: "Motor protection",
        details:
          "Motor protection activated. Check motor and electrical supply.",
        severity: "high",
      },
    ],
  },
  {
    name: "Coolair",
    slug: "coolair",
    description:
      "Coolair provides evaporative cooling systems designed for energy-efficient cooling in dry climates.",
    errorCodes: [
      {
        code: "E1",
        description: "Water sensor error",
        details:
          "Water level sensor malfunction. Check sensor and water connections.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Pump malfunction",
        details:
          "Water pump malfunction. Check pump operation and water circulation.",
        severity: "high",
      },
      {
        code: "E3",
        description: "Motor error",
        details:
          "Fan motor malfunction. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Control error",
        details: "Control system malfunction. Professional diagnosis required.",
        severity: "high",
      },
      {
        code: "F1",
        description: "Water fault",
        details:
          "Water system fault detected. Check water supply and drainage.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Safety switch",
        details: "Safety switch activated. Check system and reset if safe.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "Power fault",
        details:
          "Power supply fault. Check electrical connections and voltage.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Breezair",
    slug: "breezair",
    description:
      "Breezair evaporative coolers provide natural, energy-efficient cooling for Australian homes.",
    errorCodes: [
      {
        code: "E1",
        description: "Water level sensor fault",
        details:
          "Water level sensor malfunction. Check sensor and water supply system.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Water pump fault",
        details:
          "Water pump malfunction. Check pump operation and water circulation.",
        severity: "high",
      },
      {
        code: "E3",
        description: "Fan motor fault",
        details:
          "Fan motor malfunction. Check motor operation and remove any obstructions.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Electronic control fault",
        details:
          "Electronic control system malfunction. Professional diagnosis required.",
        severity: "high",
      },
      {
        code: "F1",
        description: "Water system fault",
        details:
          "Water system fault detected. Check water supply, drainage, and connections.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Safety protection",
        details:
          "Safety protection activated. Check system operation and reset if safe.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "Power system fault",
        details:
          "Power system fault. Check electrical connections and supply voltage.",
        severity: "medium",
      },
    ],
  },
  {
    name: "Convair",
    slug: "convair",
    description:
      "Convair evaporative coolers offer reliable and efficient cooling solutions for Australian conditions.",
    errorCodes: [
      {
        code: "E1",
        description: "Water sensor malfunction",
        details:
          "Water level sensor fault. Check sensor operation and water supply connections.",
        severity: "medium",
      },
      {
        code: "E2",
        description: "Pump system error",
        details:
          "Water pump system malfunction. Check pump operation and water flow.",
        severity: "high",
      },
      {
        code: "E3",
        description: "Motor malfunction",
        details:
          "Fan motor malfunction. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "E4",
        description: "Control system error",
        details:
          "Control system malfunction. Professional diagnosis and repair required.",
        severity: "high",
      },
      {
        code: "F1",
        description: "Water system error",
        details:
          "Water system fault detected. Check water supply, quality, and drainage.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Safety system activation",
        details:
          "Safety system activated. Check system operation and reset if conditions are safe.",
        severity: "medium",
      },
      {
        code: "P1",
        description: "Electrical system fault",
        details:
          "Electrical system fault. Check power connections and supply voltage.",
        severity: "medium",
      },
    ],
  },
];

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = brands.find((brand) => brand.slug === slug);

  if (!brand) {
    return {
      title: "Brand Not Found | Self Care - Cooling Service Melbourne",
      robots: { index: false, follow: false },
    };
  }

  const brandName = brand.name;

  return {
    title: `${brandName} Error Codes & Troubleshooting Guide | Air Conditioning Melbourne`,
    description: `Complete ${brandName} air conditioning error codes database. Find solutions for ${brandName} AC problems, fault codes, and troubleshooting steps. Professional help available 24/7 at 0405 133 761 if needed.`,
    keywords: [
      `${brandName.toLowerCase()} error codes`,
      `${brandName.toLowerCase()} air conditioning error codes`,
      `${brandName.toLowerCase()} AC error codes Melbourne`,
      `${brandName.toLowerCase()} fault codes`,
      `${brandName.toLowerCase()} troubleshooting`,
      `${brandName.toLowerCase()} aircon problems`,
      `${brandName.toLowerCase()} split system error codes`,
      `${brandName.toLowerCase()} repair Melbourne`,
      `${brandName.toLowerCase()} service Melbourne`,
      `${brandName.toLowerCase()} AC help`,
      `${brandName.toLowerCase()} error code list`,
      `${brandName.toLowerCase()} diagnostic codes`,
      `${brandName.toLowerCase()} self help`,
      `${brandName.toLowerCase()} air conditioning repair`,
      `${brandName.toLowerCase()} technician Melbourne`,
    ].join(", "),
    authors: [{ name: "Cooling Service Melbourne" }],
    creator: "Cooling Service Melbourne",
    publisher: "Cooling Service Melbourne",
    openGraph: {
      title: `${brandName} Error Codes & Troubleshooting | Air Conditioning Melbourne`,
      description: `Complete ${brandName} error codes database with solutions. Professional ${brandName} repair service available 24/7 in Melbourne. Call 0405 133 761 for help.`,
      url: `https://www.coolingservicemelbourne.com.au/self-care/${slug}`,
      siteName: "Cooling Service Melbourne",
      images: [{ url: "/openGraphImage.jpg", width: 1200, height: 630 }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${brandName} Error Codes & Troubleshooting | Melbourne AC Repair`,
      description: `Find ${brandName} error codes and solutions. Professional repair service available 24/7. Call 0405 133 761 for help.`,
    },
    alternates: {
      canonical: `https://www.coolingservicemelbourne.com.au/self-care/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const brand = brands.find((brand) => brand.slug === slug);

  if (!brand) {
    notFound();
  }

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title={`${brand.name} Error Codes & Troubleshooting`}
      />
      <BrandErrorCodes brand={brand} />
    </div>
  );
};

export default page;
