(function() {
    angular.module('vega').controller("headerctrl", headerctrl);

    function headerctrl($state) {
        var vm = this;

          vm.goToCoursePage=function(pageheading){
            alert(pageheading);
            $state.go("user.datacenter");
        };
        vm.techmegamenu = [{
            "parent": [{
                "menudata": "Hardware",
                "parent": [{
                    "menudata": "Data Center Components"
                }, {
                    "menudata": "Servers"
                }, {
                    "menudata": "Network"
                }, {
                    "menudata": "Storage"
                }]
            }, {
                "menudata": "Operating System",
                "parent": [{
                    "menudata": "Windows",
                    "parent": [{
                            "menudata": "Active Directory"
                        }, {
                            "menudata": "File Services"
                        }, {
                            "menudata": "Print Services"
                        }, {
                            "menudata": "DNS"
                        }, {
                            "menudata": "Web Services"
                        }, {
                            "menudata": "DHCP"
                        }, {
                            "menudata": "Application Services"
                        }, {
                            "menudata": "Terminal Services"
                        }

                    ],
                }, {
                    "menudata": "Unix/Linux",
                    "parent": [{
                        "menudata": "RedHat"
                    }, {
                        "menudata": "SuSE Enterprise Linux"
                    }, {
                        "menudata": "Oracle Enterprise Linux"
                    }, {
                        "menudata": "Ubuntu"
                    }, {
                        "menudata": "Fedora"
                    }, {
                        "menudata": "CentOS"
                    }],
                }]
            }],
            "menudata": "IT  Infrastructure"
        }, {
            "menudata": "Virtualization",
            "parent": [{
                "menudata": "VMware"
            }, {
                "menudata": "Microsoft Hyper-V"
            }, {
                "menudata": "Citrix Xen Server"
            }, {
                "menudata": "RedHat Virtualization"
            }, {
                "menudata": "Oracle Virtualization"
            }, {
                "menudata": "Public Cloud"
            }]

        }, {

            "menudata": "Cloud",
            "parent": [{
                "menudata": "Public Cloud",
                "parent": [{
                    "menudata": "Microsoft Azure"
                }, {
                    "menudata": "AWS"
                }, {
                    "menudata": "Google Cloud"
                }, {
                    "menudata": "IBM BlueMix"
                }]

            }, {
                "menudata": "Private Cloud",
                "parent": [{
                    "menudata": "Microsoft System Center"
                }, {
                    "menudata": "AWS VPC"
                }, {
                    "menudata": "VMware Private Cloud"
                }, {
                    "menudata": "IBM Private Cloud"
                }]
            }, {
                "menudata": "Hybrid Cloud"
            }]
        }, {
            "menudata": "Storage",
            "parent": [{
                "menudata": "Storage Componets and Basics",
            }, {
                "menudata": "EMC Storage",
                "parent": [{
                    "menudata": "vNX"
                }, {
                    "menudata": "vMAX"
                }, {
                    "menudata": "Isilon"
                }]
            }, {
                "menudata": "NetApp",
                "parent": [{
                    "menudata": "All Models"
                }]
            }, {
                "menudata": "HPE",
                "parent": [{
                    "menudata": "3 PAR"
                }, {
                    "menudata": "MSA"
                }]
            }, {
                "menudata": "IBM",
                "parent": [{
                    "menudata": "Tivoli"
                }, {
                    "menudata": "Flash Storage"
                }, {
                    "menudata": "Elastic Storage"
                }, {
                    "menudata": "Hybrid Cloud Storage"
                }, {
                    "menudata": "Tape Storage"
                }, ]
            }]
        }, {

            "menudata": "Backup",
            "parent": [{
                "menudata": "Backup Basics"
            }, {
                "menudata": "IBM Tivoli"
            }, {
                "menudata": "HP Data Protector"
            }, {
                "menudata": "Microsoft SCDPM"
            }, {
                "menudata": "EMC Avamar & Networker"
            }, {
                "menudata": "Symentec products"
            }]
        }, {

            "menudata": "Database",
            "parent": [{
                "menudata": "Database Basics"
            }, {
                "menudata": "RDBMS",
                "parent": [{
                    "menudata": "Microsoft SQL Server"
                }, {
                    "menudata": "Oracle Database"
                }, {
                    "menudata": "My SQL"
                }, {
                    "menudata": "Postgres"
                }, {
                    "menudata": "IBM DB2"
                }]

            }, {
                "menudata": "Big Data",
                "parent": [{
                    "menudata": "Hadoop"
                }, {
                    "menudata": "SAP HANA"
                }, {
                    "menudata": "HPE Vertica"
                }, {
                    "menudata": "Pivotal Green Plum"
                }]
            }, {
                "menudata": "No SQL",
                "parent": [{
                    "menudata": "Mongo DB"
                }, {
                    "menudata": "Casandra"
                }]
            }]
        }, {

            "menudata": "Software Development",
            "parent": [{
                "menudata": "Basics & Framework"
            }, {
                "menudata": "Programming Languages",
                "parent": [{
                    "menudata": "C"
                }, {
                    "menudata": ".Net"
                }, {
                    "menudata": "Java"
                }, {
                    "menudata": "PHP"
                }, {
                    "menudata": "SQL"
                }, {
                    "menudata": "Python"
                }]
            }]
        }, {

            "menudata": "DevOps or Scripting or Automation",
            "parent": [{
                "menudata": "Scripting Languages",
                "parent": [{
                    "menudata": "Puppet"
                }, {
                    "menudata": "Chef"
                }, {
                    "menudata": "Json"
                }, {
                    "menudata": "Perl"
                }, {
                    "menudata": "Powershell"
                }, {
                    "menudata": "Python"
                }, {
                    "menudata": "Shell"
                }, ]
            }, {
                "menudata": "Softwares pack",
                "parent": [{
                    "menudata": "SCO"
                }, {
                    "menudata": "HP OO"
                }]
            }]
        }, {

            "menudata": "Design the IT Infrastrcuture",
            "parent": [{
                "menudata": "Architecture Basics"
            }, {
                "menudata": "Frameworks",
                "parent": [{
                    "menudata": "TOGAF"
                }, {
                    "menudata": "Agile"
                }]
            }, {
                "menudata": "Datacenter Design"
            }, {
                "menudata": "Hardware Design"
            }, {
                "menudata": "Platform Design"
            }, {
                "menudata": "Storage Design"
            }, {
                "menudata": "Backup Design"
            }, {
                "menudata": "Network Design"
            }, {
                "menudata": "Monitoring Solutions Design"
            }, {
                "menudata": "Database Design"
            }, {
                "menudata": "Cloud Design"
            }, {
                "menudata": "Virtualization Design"
            }, ]
        }, {

            "menudata": "Interview Question books",
            "parent": [{
                "menudata": "About Interview facing Skills"
            }, {
                "menudata": "SoftSkill"
            }, {
                "menudata": "Windows "
            }, {
                "menudata": "VMware"
            }, {
                "menudata": "Hyper-V"
            }, {
                "menudata": "Azure"
            }, {
                "menudata": "AWS"
            }, {
                "menudata": "SCCM"
            }, {
                "menudata": "SCOM"
            }, {
                "menudata": "SCVMM"
            }, {
                "menudata": "SQL Server"
            }, {
                "menudata": "EMC SAN Admin"
            }, {
                "menudata": "Netapp Admin"
            }, {
                "menudata": "HP SAN Admin"
            }, {
                "menudata": "PostGres"
            }, {
                "menudata": "Oracle Database"
            }, {
                "menudata": "Tovoli Storage Admin"
            }, {
                "menudata": "HP Backup Admin"
            }, {
                "menudata": "Symentec Backup Admin"
            }, {
                "menudata": "Network Admin"
            }, {
                "menudata": "Linux Admin"
            }, {
                "menudata": "Implementation Engineer"
            }, {
                "menudata": "IT Consultant or Architect"
            }]
        }, {

            "menudata": "Networking",
            "parent": [{
                "menudata": "Cisco",
                "parent": [{
                    "menudata": "Hardware"
                }, {
                    "menudata": "Switching"
                }, {
                    "menudata": "Security"
                }, {
                    "menudata": "Wireless"
                }]
            },{
            	"menudata":"Juniper",
            	"parent":[{
            		"menudata": "Routing & Switching"
            	}]
            },{
            	"menudata":"HPE",
            	"parent":[{
            		"menudata": "Switching"
            	}]
            }]
        }, {

            "menudata": "PMPi"
        }, {

            "menudata": "ITIL"
        }];


    }

})();
