import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GraphiqueBarChart from "../chart/barChart";
import GraphiqueLineChart from "../chart/lineChart";
import GraphiquePieChart from "../chart/pieChart";
import GraphiqueRadarChart from "../chart/radarChart";
import logoEnergy from "../../assets/energy.svg";
import logoPoulet from "../../assets/chicken.svg";
import logoPomme from "../../assets/apple.svg";
import logoCheese from "../../assets/cheeseburger.svg";
import CardIndicateur from "../indicateur";
import Erreur from "../erreur";

/**
 * This function is used to make all the API calls necessary to create the graphics. It also calls each react component to represent them
 * @returns JSX Content
 */

function Content() {
  //recovery of the id of the user passed in parameter
  let { id } = useParams();

  const [isLoadingName, setIsLoadingName] = useState(true);
  const [userData, setName] = useState();

  // API call to retrieve user information based on the parameter passed in the URL
  async function fetchName() {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const result = await response.json();
      setName(result.data);
      setIsLoadingName(false);
    } catch (error) {
      console.error(error);
    }

    
  }

  const [userActivity, setActivity] = useState([]);
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);

  // API call to retrieve user activity information based on id
  async function fetchActivity() {
    try {
      const reponse = await fetch(`http://localhost:3000/user/${id}/activity`);
      const result = await reponse.json();
      setActivity(result);
      setIsLoadingActivity(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [userSession, setSession] = useState([]);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  // API call to retrieve user session information based on id
  async function fetchAverageSession() {
    try {
      const reponse = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      const result = await reponse.json();
      setSession(result.data);
      setIsLoadingSession(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [userPerformance, setPerformance] = useState([]);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);

  // API call to retrieve performance information for a user based on id
  async function fetchAveragePerformance() {
    try {
      const reponse = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      const result = await reponse.json();
      setPerformance(result.data);
      setIsLoadingPerformance(false);
    } catch (error) {
      console.error(error);
    }
  }

  // UseEffect to start each function
  useEffect(() => {
    fetchName();
    fetchActivity();
    fetchAverageSession();
    fetchAveragePerformance();
  }, []);

  if(!userData){
    return <Erreur />
  }else {
    return (
      <div className="contentGraphique" id="contentGraphique">
        <div className="titre">
          {!isLoadingName && (
            <p className="contentWelcome">
              Bonjour <span>{userData.userInfos.firstName}</span>
            </p>
          )}
          <p className="contentGG">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className="groupChartCard">
          <div className="groupChart">
            <div>
              {!isLoadingActivity && (
                <GraphiqueBarChart source={userActivity.data} />
              )}
            </div>
            <div>
              {!isLoadingSession && <GraphiqueLineChart source={userSession} />}
            </div>
            <div>
              {!isLoadingPerformance && (
                <GraphiqueRadarChart source={userPerformance} />
              )}
            </div>
            <div>{!isLoadingName && <GraphiquePieChart source={userData} />}</div>
          </div>
  
          <div>
            <ul className="groupCard">
              {!isLoadingActivity && (
                <CardIndicateur
                  logo={logoEnergy}
                  back={"#FF0000"}
                  opacity={0.1}
                  info={userData.keyData.calorieCount}
                  unite={"kCal"}
                  type={"Calories"}
                />
              )}
              {!isLoadingActivity && (
                <CardIndicateur
                  logo={logoPoulet}
                  back={"#4ab8ff"}
                  opacity={0.1}
                  info={userData.keyData.proteinCount}
                  unite={"g"}
                  type={"Proteines"}
                />
              )}
              {!isLoadingActivity && (
                <CardIndicateur
                  logo={logoPomme}
                  back={"#F9CE23"}
                  opacity={0.1}
                  info={userData.keyData.carbohydrateCount}
                  unite={"g"}
                  type={"Glucides"}
                />
              )}
              {!isLoadingActivity && (
                <CardIndicateur
                  logo={logoCheese}
                  back={"#fd5181"}
                  opacity={0.1}
                  info={userData.keyData.lipidCount}
                  unite={"g"}
                  type={"Lipides"}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
    
  


  
}

export default Content;
