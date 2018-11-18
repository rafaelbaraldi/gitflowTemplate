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
var hotfixCol = 1;
var betaCol = 2;
var betaHotfixCol = 3;
var release1Col = 4;
var release1fixCol = 5;
var release2Col = 4;
var release2fixCol = 5;
var release3Col = 6;
var release3fixCol = 7;
var developCol = 8;
var feature1Col = 9;
var feature2Col = 10;
var feature3Col = 9;
var feature4Col = 10;
var feature5Col = 9;
var feature6Col = 10;
var feature7Col = 9;
var feature8Col = 10;

var gitgraph = new GitGraph(config);

var master = gitgraph.branch({
  name: "master",
  column: masterCol
});
master.commit("initial commit");
var masterHotfix = gitgraph.branch({
  parentBranch: master,
  name: "master/hotfix",
  column: hotfixCol
});
var beta = gitgraph.branch({
  parentBranch: master,
  name: "beta",
  column: betaCol
});
beta.commit("random commit")
var betaHotfix = gitgraph.branch({
  parentBranch: beta,
  name: "beta_hot_fix",
  column: betaHotfixCol
});
betaHotfix.commit("random commit")

var develop = gitgraph.branch({
  parentBranch: master,
  name: "develop",
  column: developCol
});
develop.commit("first commit")

var rc1feature1 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release1/feature/1",
  column: feature1Col
});

var rc1feature2 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release1/feature/2",
  column: feature2Col
});
develop.commit("random commit")
develop.commit("random commit")

rc1feature1.commit("release 1 feature 1 commit 1");
rc1feature1.commit("release 1 feature 1 commit 2");
rc1feature1.commit("release 1 feature 1 commit 3");
rc1feature1.merge(develop)
develop.commit("random commit")

rc1feature2.commit("release 1 feature 2 commit 1");
rc1feature2.commit("release 1 feature 2 commit 2");
rc1feature2.merge(develop)
develop.commit("random commit")


var release1 = gitgraph.branch({
  parentBranch: develop,
  name: "release1",
  column: release1Col
});
release1.commit("release 1 create commit");
var release1fix = gitgraph.branch({
  parentBranch: release1,
  name: "team/release1/fix/1",
  column: release1fixCol
});
release1.commit("random commit")
release1fix.commit("release 1 fix 1 commit 1");
release1fix.commit("release 1 fix 1 commit 2");
release1fix.merge(release1)
release1.merge(beta, {
  tag: "1.0.0"
})
release1.merge(develop)

var rc2feature1 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release2/feature/1",
  column: feature3Col
});
var rc2feature2 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release2/feature/2",
  column: feature4Col
});
rc2feature1.commit("release 2 feature 1 commit 1");
rc2feature1.commit("release 2 feature 1 commit 2");
rc2feature1.commit("release 2 feature 1 commit 3");
rc2feature1.merge(develop)
develop.commit("random commit")

rc2feature2.commit("release 2 feature 2 commit 1");
rc2feature2.commit("release 2 feature 2 commit 2");
rc2feature2.merge(develop)
develop.commit("random commit")

var release2 = gitgraph.branch({
  parentBranch: develop,
  name: "release2",
  column: release2Col
});
release2.commit("release 2 create commit");
var release2fix = gitgraph.branch({
  parentBranch: release2,
  name: "team/release2/fix/1",
  column: release2fixCol
});
release2fix.commit("release 2 fix 1 commit 1");
release2fix.commit("release 2 fix 1 commit 2");
release2fix.merge(release2)

beta.merge(betaHotfix)
betaHotfix.commit("random commit");
betaHotfix.commit("random commit");
betaHotfix.merge(beta, {
  tag: "1.0.1"
});

beta.merge(master)
beta.merge(release2)
release2.merge(develop)

var rc3feature1 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release3/feature/1",
  column: feature5Col
});
var rc3feature2 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release3/feature/2",
  column: feature6Col
});
rc3feature1.commit("release 2 feature 1 commit 1");
rc3feature1.commit("release 2 feature 1 commit 2");
rc3feature1.commit("release 2 feature 1 commit 3");
rc3feature1.merge(develop)
develop.commit("random commit")

rc3feature2.commit("release 2 feature 2 commit 1");
rc3feature2.commit("release 2 feature 2 commit 2");
rc3feature2.merge(develop)
develop.commit("random commit")

var release3 = gitgraph.branch({
  parentBranch: develop,
  name: "release3",
  column: release3Col
});
release3.commit("release 3 create commit");
var release3fix = gitgraph.branch({
  parentBranch: release3,
  name: "team/release3/fix/1",
  column: release3fixCol
});
release3fix.commit("release 3 fix 1 commit 1");
release3fix.commit("release 3 fix 1 commit 2");
release3fix.merge(release3)
release3.commit("random commit")
release3.merge(develop)

var rc4feature1 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release4/feature/1",
  column: feature7Col
});
var rc4feature2 = gitgraph.branch({
  parentBranch: develop,
  name: "team/release4/feature/2",
  column: feature8Col
});
rc4feature1.commit("release 2 feature 1 commit 1");
rc4feature1.commit("release 2 feature 1 commit 2");
rc4feature1.commit("release 2 feature 1 commit 3");
rc4feature1.merge(develop)
develop.commit("random commit")

rc4feature2.commit("release 4 feature 2 commit 1");
rc4feature2.commit("release 4 feature 2 commit 2");
rc4feature2.merge(develop)
develop.commit("random commit")

release2.commit("random commit")
release2.merge(beta, {
  tag: "2.0.0"
})
beta.merge(betaHotfix)
betaHotfix.commit("random commit");
betaHotfix.commit("random commit");
betaHotfix.merge(beta, {
  tag: "2.0.1"
});


master.merge(masterHotfix)
masterHotfix.commit("random commit")
masterHotfix.commit("random commit")
masterHotfix.merge(master, {
  tag: "1.0.2"
})

master.merge(beta)
beta.commit({
  message: "masterHotfix merge release update",
  tag: "2.0.2"
})
beta.merge(betaHotfix)
betaHotfix.merge(release3)
release3.merge(develop)
