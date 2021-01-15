import React from 'react'

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id} className="itemContact">
                        {`${name}:  ${number}`}
                        <button type="button" data-id={id} onClick={deleteContact}>Delete</button>
                    </li>

                )
            })}

        </ul >
    )
}

