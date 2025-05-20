import PropTypes from 'prop-types'

const Layout = ({children}) => {
    console.log(children);
    
    return (
        <>
            <header>This is Header</header>
            <main>
                {children}
            </main>
            <footer>This is Footer</footer>
        </>
    )
}

Layout.propTypes = {
     children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
export default Layout