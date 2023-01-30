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
import Erreur from "../erreur/erreur";
import { callApi } from "../../api";
/**
 * This function is used to make all the API calls necessary to create the graphics. It also calls each react component to represent them
 * @returns JSX Content
 */

function Content() {
  //recovery of the id of the user passed in parameter
  let { id } = useParams();

  const [isInError, setIsInError] = useState(false);

  const [isLoadingName, setIsLoadingName] = useState(true);
  const [userData, setName] = useState();

  // API call to retrieve user information based on the parameter passed in the URL
  async function fetchName() {
    setIsLoadingName(true);
    const resultApi = await callApi(id, 0);

    if (resultApi) {
      setName(resultApi);
    } else {
      setIsInError(true);
    }
    setIsLoadingName(false);
  }

  const [userActivity, setActivity] = useState([]);
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);

  // API call to retrieve user activity information based on id
  async function fetchActivity() {
    setIsLoadingActivity(true);
    const resultApi = await callApi(id, 1);
    if (resultApi) {
      setActivity(resultApi);
      console.log(resultApi);
    } else {
      setIsInError(true);
    }
    setIsLoadingActivity(false);
  }

  const [userSession, setSession] = useState([]);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  // API call to retrieve user session information based on id
  async function fetchAverageSession() {
    setIsLoadingSession(true);
    const resultApi = await callApi(id, 2);
    if (resultApi) {
      setSession(resultApi);
      console.log(resultApi);
    } else {
      setIsInError(true);
    }
    setIsLoadingSession(false);
  }

  const [userPerformance, setPerformance] = useState([]);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);

  // API call to retrieve performance information for a user based on id
  async function fetchAveragePerformance() {
    setIsLoadingPerformance(true);
    const resultApi = await callApi(id, 3);
    if (resultApi) {
      setPerformance(resultApi);
      console.log(resultApi);
    } else {
      setIsInError(true);
    }
    setIsLoadingPerformance(false);
  }

  // UseEffect to start each function
  useEffect(() => {
    fetchName();
    fetchActivity();
    fetchAverageSession();
    fetchAveragePerformance();
  }, []);

  if (isInError) {
    return <Erreur />;
  } else {
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
            <div>
              {!isLoadingName && <GraphiquePieChart source={userData} />}
            </div>
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
