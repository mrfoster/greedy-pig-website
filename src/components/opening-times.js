import React from 'react'
import { FaDoorOpen } from 'react-icons/fa'

const OpeningTimes = ({ data }) => (
  <>
    {data.schema.openingHoursSpecification && (
      <section id="openingTimes">
        <h2>
          <FaDoorOpen /> Opening Times
        </h2>
        {data.schema.openingHoursSpecification.map((o, i) => (
          <p key={i}>
            {o.name && (
              <>
                <span>{o.name}</span>
                <br />
              </>
            )}
            {o.dayOfWeek.length < 7 && o.dayOfWeek.length > 1 && (
              <>
                {o.dayOfWeek[0]} - {o.dayOfWeek[o.dayOfWeek.length - 1]}
                <br />
              </>
            )}
            {o.dayOfWeek.length === 1 && (
              <>
                {o.dayOfWeek[0]}
                <br />
              </>
            )}
            {o.opens} - {o.closes} <br />
          </p>
        ))}
      </section>
    )}
  </>
)

export default OpeningTimes
