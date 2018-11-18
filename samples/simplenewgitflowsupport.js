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

//collumns
var masterCol = 0;
var betaCol = 1;
var betaHotfixCol = 2;
var release1Col = 3;
var developCol = 4;
var featureCol = 5;

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master",
  column: masterCol
});
master.commit("initial commit");

var beta = gitgraph.branch({
  parentBranch: master,
  name: "beta",
  column: betaCol
});

var release = gitgraph.branch({
  parentBranch: master,
  name: "release",
  column: release1Col
});

var develop = gitgraph.branch({
  parentBranch: master,
  name: "develop",
  column: developCol
});
develop.commit("random commit")

var feature = gitgraph.branch({
  parentBranch: develop,
  name: "feature",
  column: featureCol
});
feature.commit("random commit")
feature.commit("random commit")
feature.commit("random commit")
feature.merge(develop)
develop.commit("random commit")

develop.merge(release)
release.commit("random commit")
release.merge(beta, {
  tag: "1.0.0"
})
beta.commit("random commit")

var betaHotfix = gitgraph.branch({
  parentBranch: beta,
  name: "beta_hot_fix",
  column: betaHotfix
});
betaHotfix.commit("random commit")
betaHotfix.commit("random commit")
betaHotfix.commit("random commit")
betaHotfix.merge(beta)

beta.merge(master)
master.commit("random commit")
