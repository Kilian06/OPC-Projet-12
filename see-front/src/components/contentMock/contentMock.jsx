import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GraphiqueBarChart from "../chart/barChart/barChart";
import GraphiqueLineChart from "../chart/lineChart/lineChart";
import GraphiquePieChart from "../chart/pieChart/pieChart";
import GraphiqueRadarChart from "../chart/radarChart/radarChart";
import logoEnergy from "../../assets/energy.svg";
import logoPoulet from "../../assets/chicken.svg";
import logoPomme from "../../assets/apple.svg";
import logoCheese from "../../assets/cheeseburger.svg";
import CardIndicateur from "../indicateur/indicateur";
import { USER_MAIN_DATA } from "../../data/datamock.js";
import Erreur from "../erreur/erreur";

import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/datamock.js";
/**
 * This function is used to get all data from ../../data/datamock.js to bypass the API call and create the graphics. It also calls each react component to represent them
 * @returns the content with mock data
 */
function ContentMock() {
  //recovery of the id of the user passed in parameter
  let idParam = useParams();

  const [isLoadingName, setIsLoadingName] = useState(true);
  const [userData, setName] = useState();

  // Get user information based on the parameter passed in the URL

  function fetchName() {
    console.log(USER_MAIN_DATA);
    console.log(idParam);
    const result11 = USER_MAIN_DATA.find((element) => element.id == idParam.id);
    console.log(result11);
    setName(result11);
    setIsLoadingName(false);
  }

  const [userActivity, setActivity] = useState([]);
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);
  // Get user activity information based on id

  async function fetchActivity() {
    try {
      const result = USER_ACTIVITY.find(
        (element) => element.userId == idParam.id
      );
      setActivity(result);
      setIsLoadingActivity(false);
    } catch (error) {
      console.error(error)
      ;
    }
  }

  const [userSession, setSession] = useState([]);
  const [isLoadingSession, setIsLoadingSession] = useState(true);
  // Get user session information based on id

  async function fetchAverageSession() {
    try {
      const result = USER_AVERAGE_SESSIONS.find(
        (element) => element.userId == idParam.id
      );
      console.log(result);
      setSession(result);
      setIsLoadingSession(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [userPerformance, setPerformance] = useState([]);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);
  // Get performance information for a user based on id

  async function fetchAveragePerformance() {
    try {
      var result = USER_PERFORMANCE.find(
        (element) => element.userId == idParam.id
      );
      console.log(result);
      setPerformance(result);
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
    <div className="contentGraphique">
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
            {!isLoadingActivity && <GraphiqueBarChart source={userActivity} />}
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

export default ContentMock;
