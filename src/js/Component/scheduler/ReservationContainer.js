import React from 'react'
import styled from 'styled-components'
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 1px;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        background: blue;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`

function Table({ columns, data }) {
    const defaultColumn = React.useMemo(
        () => ({
          minWidth: 50,
          width: 90,
          maxWidth: 300,
        }),
        []
      )

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        resetResizing,
      } = useTable(
        {
          columns,
          data,
          defaultColumn,
        },
        useBlockLayout,
        useResizeColumns
      )

      return (
        <>
          <button onClick={resetResizing}>Reset Resizing</button>
          <div>
            <div {...getTableProps()} className="table">
              <div>
                {headerGroups.map(headerGroup => (
                  <div {...headerGroup.getHeaderGroupProps()} className="tr">
                    {headerGroup.headers.map(column => (
                      <div {...column.getHeaderProps()} className="th">
                        {column.render('Header')}
                        {/* Use column.getResizerProps to hook up the events correctly */}
                        <div
                          {...column.getResizerProps()}
                          className={`resizer ${
                            column.isResizing ? 'isResizing' : ''
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
    
              <div {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row)
                  return (
                    <div {...row.getRowProps()} className="tr">
                      {row.cells.map(cell => {
                        return (
                          <div {...cell.getCellProps()} className="td">
                            {cell.render('Cell')}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </>
      )
}

function ReservationContainer(){
    const columns = React.useMemo(
        () => [
          {
            Header: 'list',
            columns: [
              {
                Header: 'id',
                accessor: 'id',
              },
              {
                Header: '시술',
                accessor: 'treatment',
              },
              {
                Header: '이름',
                accessor: 'name',
              },
              {
                Header: '날짜',
                accessor: 'date',
              },
              {
                Header: '시간',
                accessor: 'time',
              },
              {
                Header: '디자이너',
                accessor: 'designer',
              },
              {
                Header: 'button',
                accessor: 'button',
              },
            ],
          },
        ],

      )

    const data = [
        {
            id: 1,
            name: '이해석',
            treatment: '펌',
            date: '2021-03-29',
            time: '14:00-16:00',
            designer: '하이',
            button: <div>
              <button>승인</button>
              <button>취소</button>
            </div>,
        },
        {
            id: 2,
            name: '최준혁',
            treatment: '커트'
        },
        {
            id: 3,
            name: '이동민',
            treatment: '펌'
        }
    ]

    return(
        <Styles>
            <Table columns={columns} data={data}/>
        </Styles>
    )
}

export default ReservationContainer;