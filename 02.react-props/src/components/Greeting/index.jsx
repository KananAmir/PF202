
// props is js object

// const Greeting = (props) => {
//     // console.log(props);

//     const { name } = props;

//     return (
//         <div>
//             Hello {name}
//         </div>
//     )
// }

// export default Greeting

const Greeting = ({name, age}) => {

    return (
        <div>
            <h2>Hello {name}</h2>
            <p>Age: {age}</p>
        </div>
    )
}

export default Greeting