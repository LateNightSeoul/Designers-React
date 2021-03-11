import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';



function App() {

  const scheduler = useSelector(state => state.scheduler);

  return (
    <table className="tables">
      <tr>
        <td>
          <div>시</div>
          <div></div>
        </td>
        <td>
          <div>분</div>
          <div></div>
        </td>
        <td>
          <div>일</div>
          <div>14일</div>
        </td>
        <td>
          <div>월</div>
          <div>15일</div>
        </td>
        <td>
          <div>화</div>
          <div>16일</div>
        </td>
        <td>
          <div>수</div>
          <div>17일</div>
        </td>
        <td>
          <div>목</div>
          <div>18일</div>
        </td>
        <td>
          <div>금</div>
          <div>19일</div>
        </td>
        <td>
          <div>토</div>
          <div>20일</div>
        </td>
      </tr>

      <tr>
        <td rowSpan={6}>
          9시
        </td>
        <td>
          00분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          10분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          20분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          30분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          40분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          50분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td rowSpan={6}>
          9시
        </td>
        <td>
          00분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          10분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          20분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          30분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          40분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>
          50분
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

    </table>
  );
}

export default App;
