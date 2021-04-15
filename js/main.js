console.log("Starte");
const Edges = [[0,2/3],[1,1/3],[1,-1/3],[0,-2/3],[-1,-1/3],[-1,1/3]];
var debug = [];
/* 
 0
5/\1
|  |
4\/2
  3 
 */

function nearest_edges(point_a,point_b) { //Calculats the tow nearest edges of tow hexagones
    let smalest_dist = [[1000000,0],[1000000,0]];
    for (let i = 0; i < Edges.length; i++) {
        //calculate the position of the curent edge
        let edge = Edges[i];
        //edge[0] = parseInt(point_a[0]) + edge[0]; //this changes the Edges variable for some reason
        //edge[1] = parseInt(point_a[1]) + edge[1];

        //calculate the distance between calculated edge and the center of point_b
        const distance = Math.sqrt(Math.pow(Math.abs((parseInt(point_a[0]) + edge[0])-point_b[0]),2) + Math.pow(Math.abs((parseInt(point_a[1]) + edge[1])-point_b[1]),2));

        //check if this distance is the smales distance
        if (distance < smalest_dist[0][0]) {
            smalest_dist [0] = [distance,i];
        }
        else if (distance == smalest_dist[0][0]) {  
            console.log("same_1");      //todo if to edges have the same distance, save them both
            //return;
        }
        debug.push([parseInt(point_a[0]) + edge[0],distance,i])
    }
    var edge_a = [0,0];
    edge_a[0] = parseInt(point_a[0]) + Edges[smalest_dist[0][1]] [0];
    edge_a[1] = parseInt(point_a[1]) + Edges[smalest_dist[0][1]] [1];

    for (let i = 0; i < Edges.length; i++) {
        //calculate the position of the curent edge
        const edge = Edges[i];
        //edge[0] = parseInt(point_a[0]) + edge[0];
        //edge[1] = parseInt(point_a[1]) + edge[1];
        
        //calculate the distance between edge_a and edge
        const distance = Math.sqrt(Math.pow(Math.abs((parseInt(point_b[0]) + edge[0])-edge_a[0]),2) + Math.pow(Math.abs((parseInt(point_b[1]) + edge[1])-edge_a[1]),2));

        //check if this distance is the smales distance
        if (distance < smalest_dist[1][0]) {
            smalest_dist [1] = [distance,i];
        }
        else if (distance == smalest_dist[1][0]) {        //todo if to edges have the same distance, save them both
            console.log("same_2");
            //return;
        }
    }
    console.log(smalest_dist);
}

function line_of_sight() {
    start = document.getElementById("start").value.split(" ");
    end = document.getElementById("end").value.split(" ");
    nearest_edges(start,end)
}