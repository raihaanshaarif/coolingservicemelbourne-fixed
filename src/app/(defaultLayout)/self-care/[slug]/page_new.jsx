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
      // C Series - Temperature Sensor Faults
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
      // E Series - Critical System Faults
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
      // F Series - Temperature/Pressure Faults
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
      // Additional comprehensive error codes
      {
        code: "U0",
        description: "Refrigerant shortage",
        details:
          "Low refrigerant detected. Check for leaks and recharge system if needed.",
        severity: "high",
      },
      {
        code: "U4",
        description: "Communication abnormality",
        details:
          "Communication error between indoor and outdoor units. Check connecting cables.",
        severity: "medium",
      },
      {
        code: "UF",
        description: "Gas shortage",
        details:
          "Refrigerant shortage detected. Professional leak detection and recharge required.",
        severity: "high",
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
        code: "P1",
        description: "Power supply voltage",
        details:
          "Power supply voltage abnormality. Check electrical supply and connections.",
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
        code: "F21",
        description: "Indoor fan motor fault",
        details:
          "Indoor fan motor malfunction. Check motor operation and obstructions.",
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
      {
        code: "F27",
        description: "Outdoor coil freeze protection",
        details:
          "Outdoor coil freeze protection activated. Check defrost operation.",
        severity: "medium",
      },
      {
        code: "F28",
        description: "Refrigerant leak detection",
        details:
          "Possible refrigerant leak detected. Professional inspection required.",
        severity: "high",
      },
      {
        code: "F29",
        description: "Compressor discharge temperature high",
        details:
          "Compressor discharge temperature too high. Check system operation.",
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
      {
        code: "E5 01",
        description: "Indoor unit PCB error",
        details:
          "Indoor unit control board fault. Professional replacement required.",
        severity: "high",
      },
      {
        code: "E5 21",
        description: "Inverter module error",
        details:
          "Inverter module malfunction. Professional diagnosis and repair required.",
        severity: "high",
      },
      {
        code: "E6 01",
        description: "Outdoor fan motor error",
        details:
          "Outdoor fan motor fault. Check motor operation and remove obstructions.",
        severity: "high",
      },
      {
        code: "E7 01",
        description: "Defrost sensor error",
        details:
          "Defrost sensor malfunction. Check sensor and defrost operation.",
        severity: "medium",
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
      {
        code: "Error 09",
        description: "Indoor coil sensor error",
        details:
          "Indoor heat exchanger sensor fault. Professional diagnosis required.",
        severity: "medium",
      },
      {
        code: "Error 10",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor malfunction. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "Error 11",
        description: "Fan motor error",
        details:
          "Fan motor malfunction. Check for obstructions and motor operation.",
        severity: "high",
      },
      {
        code: "Error 12",
        description: "Inverter error",
        details: "Inverter circuit malfunction. Professional repair required.",
        severity: "high",
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
      {
        code: "F1",
        description: "Defrost sensor error",
        details:
          "Defrost sensor malfunction. Check sensor and defrost operation.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "Discharge temperature sensor error",
        details:
          "Compressor discharge temperature sensor fault. Check sensor operation.",
        severity: "medium",
      },
      {
        code: "F3",
        description: "Suction temperature sensor error",
        details:
          "Suction line temperature sensor malfunction. Professional diagnosis needed.",
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
      {
        code: "E11",
        description: "Outdoor PCB error",
        details:
          "Outdoor unit control board malfunction. Professional replacement required.",
        severity: "high",
      },
      {
        code: "E12",
        description: "Inverter error",
        details: "Inverter circuit malfunction. Professional repair required.",
        severity: "high",
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
        code: "E9",
        description: "Outdoor coil sensor error",
        details:
          "Outdoor heat exchanger sensor malfunction. Professional diagnosis needed.",
        severity: "medium",
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
      {
        code: "F3",
        description: "Defrost sensor error",
        details:
          "Defrost sensor malfunction. Check sensor and defrost operation.",
        severity: "medium",
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
        code: "E6",
        description: "Compressor discharge temperature high",
        details:
          "Compressor discharge temperature too high. Check system operation.",
        severity: "high",
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
      {
        code: "F3",
        description: "Inverter error",
        details: "Inverter circuit malfunction. Professional repair required.",
        severity: "high",
      },
    ],
  },
  {
    name: "Braemar",
    slug: "braemar",
    description:
      "Braemar specializes in evaporative cooling systems designed for Australian climate conditions.",
    errorCodes: [
      {
        code: "E1",
        description: "Water level sensor error",
        details:
          "Water level sensor malfunction. Check sensor and water supply.",
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
        details:
          "Temperature sensor malfunction. Check sensor and connections.",
        severity: "medium",
      },
      {
        code: "E5",
        description: "Control panel error",
        details: "Control panel malfunction. Professional diagnosis required.",
        severity: "high",
      },
      {
        code: "E6",
        description: "Water flow sensor error",
        details:
          "Water flow sensor malfunction. Check water circulation system.",
        severity: "medium",
      },
      {
        code: "F1",
        description: "Water overflow protection",
        details:
          "Water overflow detected. Check drain and water level controls.",
        severity: "medium",
      },
      {
        code: "F2",
        description: "No water supply",
        details:
          "Insufficient water supply. Check water connection and supply.",
        severity: "medium",
      },
      {
        code: "F3",
        description: "Pad saturation sensor",
        details:
          "Cooling pad saturation sensor error. Check pads and water distribution.",
        severity: "medium",
      },
      {
        code: "F4",
        description: "Water quality sensor",
        details:
          "Water quality sensor error. Check water quality and sensor operation.",
        severity: "low",
      },
      {
        code: "P1",
        description: "Power supply error",
        details:
          "Power supply voltage abnormality. Check electrical connections.",
        severity: "medium",
      },
      {
        code: "P2",
        description: "Motor overload",
        details:
          "Motor overload protection activated. Check motor and electrical supply.",
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
        code: "E6",
        description: "Zone damper error",
        details:
          "Zone control damper malfunction. Check damper operation and connections.",
        severity: "medium",
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
        code: "F4",
        description: "Filter condition error",
        details:
          "Filter condition sensor error. Check and clean or replace filters.",
        severity: "low",
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
      url: `https://coolingservicemelbourne.com.au/self-care/${slug}`,
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
      canonical: `https://coolingservicemelbourne.com.au/self-care/${slug}`,
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
