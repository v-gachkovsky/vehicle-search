import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = styled.table`
  margin-left:auto;
  margin-right:auto;
  margin-top: 3rem;
  border: 1px solid #A9A9A9;
  border-collapse: collapse;
`

const Body = styled.tbody``
const Row = styled.tr`
  border: 1px solid #A9A9A9;
`
const Cell = styled.td`
  padding: .5rem;
`

const Hint = styled.p`
  color: #A9A9A9;
  font-size: 18px;
  margin-top: 3rem;
  text-align: center;
`

const CarInfoTable = ({ carInfo, isLoading }) => {
  if (carInfo) {
    return (
      <Table>
        <Body>
          <Row>
            <Cell>
              Владелец:
            </Cell>
            <Cell>
              { carInfo.owner }
            </Cell>
          </Row>
      
          <Row>
            <Cell>
              Год производства:
            </Cell>
            <Cell>
              { carInfo.year }
            </Cell>
          </Row>
      
          <Row>
            <Cell>
              Количество владельцев:
            </Cell>
            <Cell>
              { carInfo.ownersCount }
            </Cell>
          </Row>
      
          <Row>
            <Cell>
              Факты ДТП:
            </Cell>
            <Cell>
              { carInfo.crashesCount }
            </Cell>
          </Row>
        </Body>
      </Table>
    )
  } else {
    return !isLoading
      ? (
        <Hint>
          Введите номерной знак автомобиля (например AA9999AI) и нажмите Enter
        </Hint>
      ) : (
        null
      )
  }
}

CarInfoTable.propTypes = {
  // Data
  carInfo: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    ownersCount: PropTypes.number.isRequired,
    crashesCount: PropTypes.number.isRequired
  }),
  isLoading: PropTypes.bool.isRequired
}

export default CarInfoTable
