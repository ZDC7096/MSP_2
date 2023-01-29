import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, createTheme, ThemeProvider } from "@mui/material";

function ProfileCard(props){
    
    
    return(
        <Grid item xs={"auto"}>    
            <Card sx={{ width: 200 }}>
                <CardMedia
                    component="img"
                    alt= {props.item.imgAlt}
                    height= "250"
                    image={props.item.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 20, fontWeight: 'bolder'}}>
                        {props.item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.item.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={props.item.gitHub} variant="outlined" size="small">Github</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProfileCard