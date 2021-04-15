console.log("Starte");
const Edges = [[0,2/3],[1,1/3],[1,-1/3],[0,-2/3],[-1,-1/3],[1,1/3]]
/* 
 0
5/\1
|  |
4\/2
  3 
 */

function nearest_edges(point_a,point_b) { //Calculats the tow nearest edges of tow hexagones
    var smalest_dist = [[1000000,0],[1000000,0]];
    for (let i = 0; i < Edges.length; i++) {
        //calculate the position of the curent edge
        const edge = Edges[i];
        edge[0] = parseInt(point_a[0]) + edge[0]; //this changes the Edges variable for some reason
        edge[1] = parseInt(point_a[1]) + edge[1];

        //calculate the distance between calculated edge and the center of point_b
        const distance = Math.sqrt(Math.pow(Math.abs(edge[0]-point_b[0]),2)+Math.pow(Math.abs(edge[1]-point_b[1]),2));

        //check if this distance is the smales distance
        if (distance < smalest_dist[0][0]) {
            smalest_dist [0] = [distance,i];
        }
        //todo if to edges have the same distance, save them both
    }
    var edge_a = [0,0];
    edge_a[0] = parseInt(point_a[0]) + Edges[smalest_dist[0][1]] [0];
    edge_a[1] = parseInt(point_a[1]) + Edges[smalest_dist[0][1]] [1];
    console.log(edge_a);
    for (let i = 0; i < Edges.length; i++) {
        //calculate the position of the curent edge
        const edge = Edges[i];
        edge[0] = parseInt(point_a[0]) + edge[0];
        edge[1] = parseInt(point_a[1]) + edge[1];
        
        //calculate the distance between edge_a and edge
    }
    console.log(smalest_dist);
}

function line_of_sight() {
    console.log("function");
    start = document.getElementById("start").value.split(" ");
    end = document.getElementById("end").value.split(" ");
    nearest_edges(start,end)
}