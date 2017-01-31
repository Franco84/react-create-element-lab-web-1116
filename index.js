const title = React.createElement('h1', {}, 'An Awesome Person');
const info = React.createElement('p', {}, 'Who is learning React');
const js = React.createElement('li', {}, 'JavaScript');
const react = React.createElement('li', {}, 'React');
const movie = React.createElement('li', {}, 'Movies');
const desert = React.createElement('li', {}, 'Ice cream');

const container = React.createElement('ul', {className: "me__interests"}, [js, react, movie, desert]);

var meInReact = React.createElement('div', {className: "me"}, [title,info,container]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
