import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles'

import Header from "../partials/Header/Header"




//JSS
const useStyles = makeStyles(() => ({
    container: {
        padding: "10px 0",
       
    }
  }))

  

const Default = ({ children }) => {
    const classes = useStyles()
    return(
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default