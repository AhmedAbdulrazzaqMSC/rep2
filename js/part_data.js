const partDropdownOptions = [
  {
    "Part Number": "07-00292-00",
    "Display": "07-00292-00 \u2014 Oil charge - Replace"
  },
  {
    "Part Number": "10-00431-07",
    "Display": "10-00431-07 \u2014 Compressor contactor   - Replace"
  },
  {
    "Part Number": "10-00439-00",
    "Display": "10-00439-00 \u2014 Transformer, Current Sensing - Replace"
  },
  {
    "Part Number": "10-00439-02",
    "Display": "10-00439-02 \u2014 Transformer, Current Sensing - Replace"
  },
  {
    "Part Number": "12-00309-06",
    "Display": "12-00309-06 \u2014 High-pressure cut-out  - Replace"
  },
  {
    "Part Number": "12-00395-01SV",
    "Display": "12-00395-01SV \u2014 Control sensor (supply air)  - Replace"
  },
  {
    "Part Number": "12-00433-00RB",
    "Display": "12-00433-00RB \u2014 Temperature display  - Replace"
  },
  {
    "Part Number": "12-00495-02SV",
    "Display": "12-00495-02SV \u2014 Ambient sensor  - Replace"
  },
  {
    "Part Number": "12-00495-02SV",
    "Display": "12-00495-02SV \u2014 Evaporation  coil defrost temperature sensor - Replace"
  },
  {
    "Part Number": "12-56009",
    "Display": "12-56009 \u2014 Controller  - Replace"
  },
  {
    "Part Number": "12-56012",
    "Display": "12-56012 \u2014 Controller  - Replace"
  },
  {
    "Part Number": "14-00353-20",
    "Display": "14-00353-20 \u2014 Valve Suction Modulation - Replace"
  },
  {
    "Part Number": "14-00464-20",
    "Display": "14-00464-20 \u2014 Drier filter  - Replace"
  },
  {
    "Part Number": "14-00464-20PK25",
    "Display": "14-00464-20PK25 \u2014 Drier filter  - Replace"
  },
  {
    "Part Number": "17-10811-05",
    "Display": "17-10811-05 \u2014 Service valve gasket   - Replace"
  },
  {
    "Part Number": "18-10129-22",
    "Display": "18-10129-22 \u2014 Compressor, complete (with motor) - Replace"
  },
  {
    "Part Number": "18-10178-22",
    "Display": "18-10178-22 \u2014 Compressor, complete (with motor) - Replace"
  },
  {
    "Part Number": "22-02336-08",
    "Display": "22-02336-08 \u2014 Fuse  - Replace"
  },
  {
    "Part Number": "22-02378-00PK10",
    "Display": "22-02378-00PK10 \u2014 Power Plug (Complete) Male - Replace"
  },
  {
    "Part Number": "22-50088-00",
    "Display": "22-50088-00 \u2014 Condenser fan motor capacitor - Replace"
  },
  {
    "Part Number": "22-50088-02",
    "Display": "22-50088-02 \u2014 Condenser fan motor capacitor - Replace"
  },
  {
    "Part Number": "22-50463-00PK5",
    "Display": "22-50463-00PK5 \u2014 Cable, 460 V  - Splice"
  },
  {
    "Part Number": "22-50463-00PK50",
    "Display": "22-50463-00PK50 \u2014 Cable, 460 V  - Splice"
  },
  {
    "Part Number": "22-66651-20",
    "Display": "22-66651-20 \u2014 Cable, 460 V  - Replace"
  },
  {
    "Part Number": "22-66654-20",
    "Display": "22-66654-20 \u2014 Cable, 460 V  - Replace"
  },
  {
    "Part Number": "30-50377-00",
    "Display": "30-50377-00 \u2014 DataCorder Battery Pack   - Replace"
  },
  {
    "Part Number": "38-00557-00",
    "Display": "38-00557-00 \u2014 Fan  - Replace"
  },
  {
    "Part Number": "54-00742-00",
    "Display": "54-00742-00 \u2014 Evaporator Fan Motor  - Replace"
  },
  {
    "Part Number": "66U1-7842-13",
    "Display": "66U1-7842-13 \u2014 Circuit breaker, 460 V  - Replace"
  },
  {
    "Part Number": "69NT43-202-20PK5",
    "Display": "69NT43-202-20PK5 \u2014 Coil Assembly Condenser - Replace"
  },
  {
    "Part Number": "76-50210-00",
    "Display": "76-50210-00 \u2014 Terminal Mounting Kit Compressor - 5 kit - Replace"
  },
  {
    "Part Number": "76-66694-00",
    "Display": "76-66694-00 \u2014 Humidity Sensor  - Replace"
  },
  {
    "Part Number": "79-01697-06",
    "Display": "79-01697-06 \u2014 Evaporator access panel   - Replace"
  },
  {
    "Part Number": "79-66669-04",
    "Display": "79-66669-04 \u2014 Controller Key Pad  - Replace"
  },
  {
    "Part Number": "79-66669-05",
    "Display": "79-66669-05 \u2014 Controller Key Pad  - Replace"
  },
  {
    "Part Number": "81-04203-21",
    "Display": "81-04203-21 \u2014 Coil Assembly Condenser - Replace"
  },
  {
    "Part Number": "81-04203-25",
    "Display": "81-04203-25 \u2014 Coil Assembly Condenser - Replace"
  },
  {
    "Part Number": "818260A",
    "Display": "818260A \u2014 Cable, 460 V  - Splice"
  },
  {
    "Part Number": "818559A",
    "Display": "818559A \u2014 Power Plug (Complete) Male - Replace"
  },
  {
    "Part Number": "818831A",
    "Display": "818831A \u2014 Cable, 460 V  - Replace"
  },
  {
    "Part Number": NaN,
    "Display": NaN
  }
];
const partJobMap = {
  "07-00292-00": [
    {
      "code": "B074A",
      "description": "Oil charge - Replace",
      "hours": 0.5
    }
  ],
  "10-00431-07": [
    {
      "code": "A013A",
      "description": "Compressor contactor   - Replace",
      "hours": 0.75
    }
  ],
  "10-00439-00": [
    {
      "code": "A028A",
      "description": "Transformer, Current Sensing - Replace",
      "hours": 0.5
    }
  ],
  "10-00439-02": [
    {
      "code": "A028A",
      "description": "Transformer, Current Sensing - Replace",
      "hours": 0.5
    }
  ],
  "12-00309-06": [
    {
      "code": "B094A",
      "description": "High-pressure cut-out  - Replace",
      "hours": 0.5
    }
  ],
  "12-00395-01SV": [
    {
      "code": "A058A",
      "description": "Control sensor (supply air)  - Replace",
      "hours": 0.75
    }
  ],
  "12-00433-00RB": [
    {
      "code": "A029A",
      "description": "Temperature display  - Replace",
      "hours": 0.5
    }
  ],
  "12-00495-02SV": [
    {
      "code": "A051A",
      "description": "Evaporation  coil defrost temperature sensor - Replace",
      "hours": 0.5
    },
    {
      "code": "A053A",
      "description": "Ambient sensor  - Replace",
      "hours": 0.5
    }
  ],
  "12-56009": [
    {
      "code": "A018A",
      "description": "Controller  - Replace",
      "hours": 1.0
    }
  ],
  "12-56012": [
    {
      "code": "A018A",
      "description": "Controller  - Replace",
      "hours": 1.0
    }
  ],
  "14-00353-20": [
    {
      "code": "B123A",
      "description": "Valve Suction Modulation - Replace",
      "hours": 0.25
    }
  ],
  "14-00464-20": [
    {
      "code": "B087A",
      "description": "Drier filter  - Replace",
      "hours": 0.5
    }
  ],
  "14-00464-20PK25": [
    {
      "code": "B087A",
      "description": "Drier filter  - Replace",
      "hours": 0.5
    }
  ],
  "17-10811-05": [
    {
      "code": "B110A",
      "description": "Service valve gasket   - Replace",
      "hours": 0.25
    }
  ],
  "18-10129-22": [
    {
      "code": "B064A",
      "description": "Compressor, complete (with motor) - Replace",
      "hours": 3.25
    }
  ],
  "18-10178-22": [
    {
      "code": "B064A",
      "description": "Compressor, complete (with motor) - Replace",
      "hours": 2.0
    }
  ],
  "22-02336-08": [
    {
      "code": "A034A",
      "description": "Fuse  - Replace",
      "hours": 0.25
    }
  ],
  "22-02378-00PK10": [
    {
      "code": "A001A",
      "description": "Power Plug (Complete) Male - Replace",
      "hours": 0.5
    }
  ],
  "22-50088-00": [
    {
      "code": "A005A",
      "description": "Condenser fan motor capacitor - Replace",
      "hours": 1.5
    }
  ],
  "22-50088-02": [
    {
      "code": "A005A",
      "description": "Condenser fan motor capacitor - Replace",
      "hours": 1.5
    }
  ],
  "22-50463-00PK5": [
    {
      "code": "A002X",
      "description": "Cable, 460 V  - Splice",
      "hours": 0.5
    }
  ],
  "22-50463-00PK50": [
    {
      "code": "A002X",
      "description": "Cable, 460 V  - Splice",
      "hours": 0.5
    }
  ],
  "22-66651-20": [
    {
      "code": "A002A",
      "description": "Cable, 460 V  - Replace",
      "hours": 0.5
    }
  ],
  "22-66654-20": [
    {
      "code": "A002A",
      "description": "Cable, 460 V  - Replace",
      "hours": 0.5
    }
  ],
  "30-50377-00": [
    {
      "code": "A041A",
      "description": "DataCorder Battery Pack   - Replace",
      "hours": 0.25
    }
  ],
  "38-00557-00": [
    {
      "code": "A011A",
      "description": "Fan  - Replace",
      "hours": 0.5
    }
  ],
  "54-00742-00": [
    {
      "code": "A030A",
      "description": "Evaporator Fan Motor  - Replace",
      "hours": 2.0
    }
  ],
  "66U1-7842-13": [
    {
      "code": "A008A",
      "description": "Circuit breaker, 460 V  - Replace",
      "hours": 1.0
    }
  ],
  "69NT43-202-20PK5": [
    {
      "code": "B075A",
      "description": "Coil Assembly Condenser - Replace",
      "hours": 4.0
    }
  ],
  "76-50210-00": [
    {
      "code": "B069A",
      "description": "Terminal Mounting Kit Compressor - 5 kit - Replace",
      "hours": 1.0
    }
  ],
  "76-66694-00": [
    {
      "code": "A037A",
      "description": "Humidity Sensor  - Replace",
      "hours": 1.25
    }
  ],
  "79-01697-06": [
    {
      "code": "B082A",
      "description": "Evaporator access panel   - Replace",
      "hours": 0.5
    }
  ],
  "79-66669-04": [
    {
      "code": "A039A",
      "description": "Controller Key Pad  - Replace",
      "hours": 0.5
    }
  ],
  "79-66669-05": [
    {
      "code": "A039A",
      "description": "Controller Key Pad  - Replace",
      "hours": 0.5
    }
  ],
  "81-04203-21": [
    {
      "code": "B075A",
      "description": "Coil Assembly Condenser - Replace",
      "hours": 4.0
    }
  ],
  "81-04203-25": [
    {
      "code": "B075A",
      "description": "Coil Assembly Condenser - Replace",
      "hours": 4.0
    }
  ],
  "818260A": [
    {
      "code": "A002X",
      "description": "Cable, 460 V  - Splice",
      "hours": 0.5
    }
  ],
  "818559A": [
    {
      "code": "A001A",
      "description": "Power Plug (Complete) Male - Replace",
      "hours": 0.5
    }
  ],
  "818831A": [
    {
      "code": "A002A",
      "description": "Cable, 460 V  - Replace",
      "hours": 0.5
    }
  ],
  "NaN": [
    {
      "code": "A001E",
      "description": "Cable Receptacle (Elec Conn) Male - Remove and refit",
      "hours": 0.5
    },
    {
      "code": "A002G",
      "description": "Cable, 460 V  - Rewire",
      "hours": 0.25
    },
    {
      "code": "A011E",
      "description": "Fan  - Remove and refit",
      "hours": 0.5
    },
    {
      "code": "A029D",
      "description": "Temperature display  - Re-secure",
      "hours": 0.25
    },
    {
      "code": "A039D",
      "description": "Controller Key Pad  - Re-secure",
      "hours": 0.25
    },
    {
      "code": "B077E",
      "description": "Condenser grille  - Remove and refit",
      "hours": 0.25
    },
    {
      "code": "B082E",
      "description": "Evaporator access panel   - Remove and refit",
      "hours": 0.5
    },
    {
      "code": "B116D",
      "description": "Liquid line service valve  - Re-secure",
      "hours": 0.44
    },
    {
      "code": "B123E",
      "description": "Valve Suction Modulation - Remove and refit",
      "hours": 0.5
    },
    {
      "code": "E001GG",
      "description": "Refrigerant R134A Charge  - Top up",
      "hours": 0.5
    },
    {
      "code": "E001II",
      "description": "Refrigerant R134A Charge  - Recharge",
      "hours": 0.5
    },
    {
      "code": "F001SS",
      "description": "Travel",
      "hours": 0.5
    },
    {
      "code": "F003U",
      "description": "Service Fee",
      "hours": 0.75
    }
  ]
};
