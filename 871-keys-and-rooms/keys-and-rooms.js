/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitedNode = new Map();
    const visit = (s, graph) => {
        if(visitedNode.has(s)) return 
         visitedNode.set(s,s);
        for(let n of graph[s]) {
            visit(n, graph)
        }

    }

    visit(0, rooms)
   return visitedNode.size == rooms.length
};