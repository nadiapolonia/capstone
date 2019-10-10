import React from 'react'

const PatientProp = props => {
  return (
    <>
      <section>{props.item.id}</section>
      <section>
        {props.item.firstName} {props.item.lastName}
      </section>
      <section>{props.item.schedule}</section>
      <section>{props.item.diagnoses}</section>
    </>
  )
}

export default PatientProp
