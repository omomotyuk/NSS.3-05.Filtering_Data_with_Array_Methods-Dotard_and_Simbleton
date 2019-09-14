/*
//
*/

import businesses from "./businesses.js"
import showBusiness from "./showBusiness.js"

const mapMethod = ( outputElement ) => {

    outputElement.innerHTML = "<h1>Purchasing Agents</h1>";

    const agents = businesses.map( business => {
      return business.purchasingAgent
    })
    
    console.table( agents )
    
    agents.forEach( agent => {
      outputElement.innerHTML += `<h3>${agent.nameFirst} ${agent.nameLast}</h3>`;
      outputElement.innerHTML += "<hr/>";
    });
    
    /*
      Lightning Exercise 3:
      Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number
    */
    const getAgent = ( business ) => {
      const agent = {
        nameFirst: business.purchasingAgent.nameFirst,
        nameLast: business.purchasingAgent.nameLast,
        companyName: business.companyName,
        phoneWork: business.phoneWork
      }
      return agent
    }
    
    const showAgent = ( agent ) => {
      return `
        <h3>${agent.nameFirst} ${agent.nameLast}</h3>
        <section>
          ${agent.companyName}
        </section>
        <section>
          ${agent.phoneWork}
        </section>
      `
    }
    
    outputElement.innerHTML += "<h1>Purchasing Agents</h1>";
    
    const agentList = businesses.map( business => {
      return getAgent( business )
    })
    
    agentList.forEach( agent => {
      outputElement.innerHTML += showAgent( agent );
      outputElement.innerHTML += "<hr/>";
    });
    
    //outputElement.innerHTML = "";
}

export default mapMethod
