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

function Content(props) {
  let { id } = useParams();
  console.log(id);
  const [isLoadingName, setIsLoadingName] = useState(true);
  const [userData, setName] = useState();

  const [userActivity, setActivity] = useState([]);
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);

  const [userSession, setSession] = useState([]);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  const [userPerformance, setPerformance] = useState([]);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);

  // Affichage du nom
  useEffect(() => {
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
    fetchName();
  }, []);

  // Affichage de l'histogramme avec les données des sessions passées
  useEffect(() => {
    async function fetchActivity() {
      try {
        const reponse = await fetch(
          `http://localhost:3000/user/${id}/activity`
        );
        const result = await reponse.json();
        setActivity(result);
        setIsLoadingActivity(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchActivity();
  }, []);

  // Affichage de l'histogramme avec les données de la durée mpoyenne de session
  useEffect(() => {
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
    fetchAverageSession();
  }, []);

  // Affichage de l'histogramme avec les données de la durée mpoyenne de session
  useEffect(() => {
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
    fetchAveragePerformance();
  }, []);

  return (
    <div className="contentGraphique">
      <div className="titre">
        {!isLoadingName && (
          <p className="contentWelcome">
            Bonjour <span>{userData.userInfos.firstName}</span>
          </p>

        )}
        <p className="contentGG">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
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

      <div >
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

export default Content;
