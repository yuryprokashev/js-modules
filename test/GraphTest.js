const Graph = require("../Graph");
const Edge = require("../Edge");
const Node = require("../Node.js");

module.exports = function (){
    QUnit.module("graph", {
        before: function (){
            const nodes = [
                new Node("node-1"), new Node("node-2"), new Node("node-3")
            ];
            const edges = [
                new Edge("edge-1", "node-1", "node-2"),
                new Edge("edge-2", "node-2", "node-3"),
                new Edge("edge-3", "node-2", "node-1")
            ];
            this.graph = new Graph(nodes, edges);
        }
    });
    QUnit.test("Can provide the node by id", function (assert){
        const node = this.graph.getNode("node-2");
        assert.strictEqual(node.getId(), "node-2");
    });
    QUnit.test("Can provide the outgoing edges by node id", function (assert){
        const edges = this.graph.getOutgoingEdges("node-2");
        assert.strictEqual(edges[0].getStartNodeId(), "node-2");
        assert.strictEqual(edges[0].getEndNodeId(), "node-3");

        assert.strictEqual(edges[1].getStartNodeId(), "node-2");
        assert.strictEqual(edges[1].getEndNodeId(), "node-1");
    });
    QUnit.test("Can provide the incoming edges by node id",function (assert){
        const edges = this.graph.getIncomingEdges("node-2");
        assert.strictEqual(edges[0].getStartNodeId(), "node-1");
        assert.strictEqual(edges[0].getEndNodeId(), "node-2");
    });
}