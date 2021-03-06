import React, { ReactElement, useEffect, useRef } from "react"
import { LabeledInput, Loading } from "../components"
import { initialPerson } from "../utils"
import { usePerson } from "./usePerson"

export function PersonEditor(): ReactElement {
  const [person, setProperty, setProperties, {
    isDirty,
    isValid
  }] = usePerson(initialPerson)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTimeout(() => {
      input.current?.focus()
    }, 1000)
  }, [])

  if (!person) {
    return <Loading />
  }

  return (
    <form
      className="person-editor"
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Submitting\n${JSON.stringify(person, null, 2)}`)
      }}
    >
      <h2>Person Editor</h2>
      <LabeledInput
        ref={input}
        label="Firstname:"
        value={person.firstname}
        onChange={(e) => {
          // setPerson((person) => ({
          //   ...person!,
          //   firstname: e.target.value
          // }))

          setProperty("firstname", e.target.value)

          if (e.target.value === "Alcione") {
            // setPerson({
            //   ...person!,
            //   surname: "Prefect",
            //   address: "Outer Space",
            //   email: "",
            //   phone: ""
            // })
            setProperties({
              surname: "Prefect",
              address: "Outer Space",
              email: "",
              phone: ""
            })
          }
        }}
      />
      <LabeledInput
        label="Surname:"
        value={person.surname}
        onChange={(e) => {
          // const newPerson = { ...person, surname: e.target.value }
          // setPerson(newPerson)
          setProperty("surname", e.target.value)
        }}
      />
      <LabeledInput
        label="Email:"
        value={person.email}
        onChange={(e) => {
          // const newPerson = { ...person, email: e.target.value }
          // setPerson(newPerson)
          setProperty("email", e.target.value)
        }}
      />
      <LabeledInput
        label="Address:"
        value={person.address}
        onChange={(e) => {
          // const newPerson = { ...person, address: e.target.value }
          // setPerson(newPerson)
          setProperty("address", e.target.value)
        }}
      />
      <LabeledInput
        label="Phone:"
        value={person.phone}
        onChange={(e) => {
          // const newPerson = { ...person, phone: e.target.value }
          // setPerson(newPerson)
          setProperty("phone", e.target.value)
        }}
      />
      <hr />
      <div className="btn-group">
        <button type="submit"
                className="btn btn-primary"
                disabled={!isDirty || !isValid}>
          Submit
        </button>
      </div>
      <hr />
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </form>
  )
}
