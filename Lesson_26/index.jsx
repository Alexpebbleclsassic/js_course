import React from 'react';
import ReactDOM from 'react-dom';

const Thead = () => {
  return (
    <tr>
      <th>First</th>
      <th>Second</th>
      <th>Third</th>
    </tr>
  )
}

class Tr extends React.Component {
  render() {
    const info = this.props;
    return(
      <tr>
        <td width="100px" style={ { background: "red",} }>{ info.first }</td>
        <td width="50px" style={ { background: "yellow",} }>{ info.second }</td>
        <td style={ { background: "green",} }><img width="100px" src={info.third}/></td>
      </tr>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <caption>
          <h1 style={ { color: "Black" } }>React JS</h1>
        </caption>
        <tbody style={ { fontSize: "25px" } }>
          <Thead />
          <Tr first="1" age="25" />
          <Tr second="2" age="28" />
          <Tr third="3" age="3" />
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(
  <Table/>,
  document.getElementById("root"),
)