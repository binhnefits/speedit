const Reddit = require('reddit');
const fs = require('fs');

const reddit = new Reddit({
  username: 'speedit-app',
  password: 'nfbc7yqc',
  appId: '5pA-66pvzwy1YA',
  appSecret: 'ifOPiqyIo9-BkH1cxH6mVGtykNM',
});

// reddit.get('/r/all/hot').then((res) => {
//   console.log(res.data.children[0]);
//   fs.writeFile('sample.json', JSON.stringify(res.data.children), () => '');
// });

reddit.get('/r/all/hot').then((res) => {
  // console.log(res[1].data);
  fs.writeFile('posts.json', JSON.stringify(res), () => '');
});
