import React from "react";
import { useState } from "react";
import NavbarDashboard from "../components/dashboard/navbarDashboard";
import "../style/dashboard/executeproject.css";

/*
example of execute project page that is used by user (when user logs in)
*/

const java = {
	"repo": "[REPOSITORY URL]",
	"build": {
		"language": {
			"script": "mvn clean package",
			"output": "target"
		},
		"docker": {
			"script": "docker build -t [YOUR IMAGE] .",
			"output": null
		}
	},
	"test": {
		"language": {
			"script": "mvn test"
		}
	},
	"deploy": {
		"docker": {
			"image": "[YOUR IMAGE]",
			"registry": "your-registry",
			"tag": "latest",
			"script": "docker push [YOUR REGISTRY]/[YOUR IMAGE]:latest"
		},
		"script": {
			"language": "[DEPLOYMENT COMMAND] [TARGET]/"
		}
	}
}
const python = {
	"repo": "[REPOSITORY URL]",
	"build": {
		"language": {
			"script": "pip install -r requirements.txt",
			"output": "target"
		},
		"docker": {
			"script": "docker build -t [YOUR IMAGE] .",
			"output": null
		}
	},
	"test": {
		"language": {
			"script": "pytest"
		}
	},
	"deploy": {
		"docker": {
			"image": "[YOUR IMAGE]",
			"registry": "[YOUR REGISTRY]",
			"tag": "latest",
			"script": "docker push [YOUR REGISTRY]/[YOUR IMAGE]:latest"
		},
		"script": {
			"language": "[DEPLOYMENT COMMAND] [TARGET]/"
		}
	}
}

const php = {
	"repo": "[REPOSITORY URL]",
	"build": {
		"language": {
			"script": "composer install",
			"output": "target"
		},
		"docker": {
			"script": "docker build -t [YOUR IMAGE] .",
			"output": null
		}
	},
	"test": {
		"language": {
			"script": "composer test"
		}
	},
	"deploy": {
		"docker": {
			"image": "[YOUR IMAGE]",
			"registry": "[YOUR REGISTRY]",
			"tag": "latest",
			"script": "docker push [YOUR REGISTRY]/[YOUR IMAGE]:latest"
		},
		"script": {
			"language": "[DEPLOYMENT COMMAND] [TARGET]/",
		}
	}
}

const csharp = {
	"repo": "[REPOSITORY URL]",
	"build": {
		"language": {
			"script": "dotnet build",
			"output": "target"
		},
		"docker": {
			"script": "docker build -t [YOUR IMAGE] .",
			"output": null
		}
	},
	"test": {
		"language": {
			"script": "dotnet test"
		}
	},
	"deploy": {
		"docker": {
			"image": "[YOUR IMAGE]",
			"registry": "[YOUR REGISTRY]",
			"tag": "latest",
			"script": "docker push [YOUR REGISTRY]/[YOUR IMAGE]:latest"
		},
		"script": {
			"language": "[DEPLOYMENT COMMAND] [TARGET]/"
		}
	}
}
const javascript = {
	"repo": "[REPOSITORY URL]",
	"build": {
		"language": {
		  "script": "npm run build",
		  "output": "target"
		},
		"docker": {
		  "script": "docker build -t [YOUR IMAGE] .",
		  "output": null
		}
	},
	"test": {
		"language": {
			"script": "npm test"
		}
	},
	"deploy": {
		"docker": {
			"image": "[YOUR IMAGE]",
			"registry": "[YOUR REGISTRY]",
			"tag": "latest",
			"script": "docker push [YOUR REGISTRY]/[YOUR IMAGE]:latest"
		},
		"script": {
			"language": "[DEPLOYMENT COMMAND] [TARGET]/"
		}
	}
}

const ExecuteProject = () => {
  const [idStep, setIdStep] = useState([]);
  const [activeLanguage, setActiveLanguage] = useState({})
  const handleChange = (e) => {
    let language = e.target.value
    console.log(language=="javascript")
    switch (true){
      case language == "javascript":
        setActiveLanguage(JSON.stringify(javascript))
        break
        case language == "java":
        setActiveLanguage(JSON.stringify(java))
        break
        case language == "csharp":
        setActiveLanguage(JSON.stringify(csharp))
        break
        case language == "php":
        setActiveLanguage(JSON.stringify(php))
        break
        case language == "python":
        setActiveLanguage(JSON.stringify(python))
        break
      default:
        console.log("No data")
    }
  }
  
  const [showProject,setShowProject] = useState(false)
  const [showAdd,setShowAdd] = useState(true)
  const onShowProject = () => {
      setShowProject(true)
      setShowAdd(false)
  }
  const onShowAdd = () =>{
    setShowProject(false)
      setShowAdd(true)
  }
 console.log(activeLanguage)
  let i = 0;
  const steps = () => {
    setTimeout(() => {
      if (i < 5) {
        setIdStep((prevState) => [...prevState, i]);
        i = i + 1;
        steps();
      }
    }, 2000);
  };
  console.log(idStep)
  return (
    <div>
      <NavbarDashboard />
     
      <div className="executeproject-dashboard">
        <div className="project-container">
          <div className="projects">
            <div className="project" onClick={onShowProject}>Project 1</div>
            <div className="project" onClick={onShowProject}>Project 2</div>
            <div className="project" onClick={onShowProject}>Project 3</div>
            <div className="btn-container">
              <button className="login-btn project-btn" onClick={onShowAdd}>+</button>
            </div>
          </div>
          <div className="project-details" style={{display: showProject ? "block" : "none"}}>
            <p className="project-title">
              Project name <span>Java</span>
            </p>
            <div className="btn-container">
              <button className="login-btn project-btn" onClick={steps}>
                Start
              </button>
            </div>
            <div className={idStep[0] == 1 ? "step green" : "step red"}>
              Step 1
            </div>
            <div className={idStep[1] == 2 ? "step green" : "step red"}>
              Step 2
            </div>
            <div className={idStep[2] == 3 ? "step green" : "step red"}>
              Step 3
            </div>
            <div className={idStep[3] == 4 ? "step green" : "step red"}>
              Step 4
            </div>
            <div className={idStep[4] == 5 ? "step green" : "step red"}>
              Step 5
            </div>
          </div>
          <div className="project-details" style={{display: showAdd ? "block" : "none"}}>
            <input type="text" placeholder="Project name" />
            <select id="options" onChange={handleChange}>
              <option value="java">Java</option>
              <option value="csharp">CSharp</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="php">Php</option>
            </select>
            <textarea name="" id="" cols="30" rows="10" value={activeLanguage}></textarea>
            <button className="login-btn project-btn" onClick={steps}>
                Add
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecuteProject;
