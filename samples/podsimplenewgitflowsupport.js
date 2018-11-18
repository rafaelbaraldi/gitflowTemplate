var graphConfig = new GitGraph.Template({
  colors: [ "#9993FF", "#47E8D4", "#6BDB52", "#F85BB5", "#FFA657", "#ffff00", "#ff3c3c", "#58a958", "#40caee", "#9f5fdb", "#c7a9a9" ],
  branch: {
    color: "#000000",
    lineWidth: 3,
    spacingX: 60,
    mergeStyle: "straight",
    showLabel: true, // display branch names on graph
    labelFont: "normal 10pt Arial",
    labelRotation: 0
  },
  commit: {
    spacingY: -30,
    dot: {
      size: 8,
      strokeColor: "#000000",
      strokeWidth: 4
    },
    tag: {
      font: "normal 10pt Arial",
      color: "yellow"
    },
    message: {
      color: "black",
      font: "normal 12pt Arial",
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
    }
  },
  arrow: {
    size: 8,
    offset: 3
  }
});

var config = {
  template: graphConfig,
  mode: "extended",
  orientation: "horizontal"
};

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master",
});
master.commit("initial commit");
master.commit({
  message: "v1.0.0",
  tag: "1.0.0",
});
master.commit("initial commit");
master.commit("initial commit");
master.commit({
  message: "v1.2.0",
  tag: "1.2.0",
});
master.commit("initial commit");
master.commit("initial commit");

var develop = gitgraph.branch({
  parentBranch: master,
  name: "develop"
});
develop.commit("random commit")

var feature = gitgraph.branch({
  parentBranch: develop,
  name: "team/release1/feature1"
});
feature.commit("random commit")
feature.commit("random commit")
feature.commit("random commit")
feature.merge(develop)
develop.commit("random commit")

var feature2 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release1/feature2"
});
feature2.commit("random commit")
feature2.commit("random commit")
feature2.commit("random commit")
feature2.merge(develop)
develop.commit("random commit")

develop.merge(master, {
  tag: "2.0.0"
})
master.commit("random commit")
