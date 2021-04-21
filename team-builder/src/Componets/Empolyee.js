export default function Employee(props) {
    const { info } = props

    if (!info) {
        return <h3>Working</h3>
    }

    return (
        <div className='friend container'>
            <h2>{info.name}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
    )
} 