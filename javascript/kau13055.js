var clusterArray = new Array();
// Class to save Grouping Clusters from JSON
class GroupingCluster {
    constructor(cluster, logo) {
        this.cluster = cluster;
        this.logo = logo;
    }
}
async function LoadPage() {
    try {
        const response = await fetch(`./data/A2-JSON.json`);
        const data = await response.json();
        localStorage.setItem("jsonData", JSON.stringify(data));
        createMain(data);
        LoadClusters(data);
        cluster(data);
    } catch (error) {
        alert(`Error from Fetch: ${error}`);
    }
}

function LoadClusters(data){
    for (let cluster of data.Groupings){
         
        clusterArray.push( new GroupingCluster(cluster.cluster,cluster.logo));
        
    }
    console.log(clusterArray);
}
 
function createMain(data) {
    document.querySelector("header").innerHTML = `<h2>IT Book Clusters</h2><hr> `;
    document.querySelector("header").classList.add("header-style");
    const studentData = data.Fall2023;
    document.querySelector("footer").classList.add("footer-style");
     
}


function cluster(data) {
    document.querySelector("h3").innerHTML=`<p>Select the Cluster to see more Information</p>`;
    const contentContainer = document.querySelector("#content");
    let contentHTML = '';

    for (const [index, cluster] of clusterArray.entries()) {
        contentHTML += `
            <figure>
                <img src="./images/${cluster.logo}" alt="${cluster.cluster}" />
               <figcaption onclick="saveClusterName('${cluster.cluster}')">
                <a href="pages/BookDetail.html" >${cluster.cluster}</a>
                </figcaption>
                </figure>
        `;
    }

    contentContainer.innerHTML = contentHTML;
}


function saveClusterName(clusterName) {
    localStorage.setItem("selectedCluster", clusterName);
}

 
