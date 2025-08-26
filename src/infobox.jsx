import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import './infobox.css'

export default function Infobox({info}){
    const HOT_URL = "https://imgs.search.brave.com/Uz8KRYyzGE80ctAY8ABjoTSyNYEKRlWPnZ64bnNK0pw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/NTAyMTA0MC9waG90/by9nbG9iYWwtd2Fy/bWluZy1mcm9tLXRo/ZS1zdW4tYW5kLWJ1/cm5pbmctaGVhdHdh/dmUtaG90LXN1bi1j/bGltYXRlLWNoYW5n/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZlZmVzBiVnJw/cDRuYlV0Mk5OYV9w/ejVPUVMxbG1JNzVy/RVpuYl96NjdlMD0";
    const COLD_URL = "https://imgs.search.brave.com/moLtYR7PjskhtNXzDfM0ny2mxIf33a6K6JDeFj9ZLJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/NDA1LzU5Mi9zbWFs/bC9wZW9wbGUtd2Fs/a2luZy13aXRoLWRv/Z3MtaW4td2ludGVy/LW1hbi1sZWFkaW5n/LXBldC1vbi1sZWFz/aC1pbi1jb2xkLXdl/YXRoZXItd2l0aC1z/bm93LXdvbWFuLXdp/dGgtZG9nLXdpbnRl/cnRpbWUtY29mZmVl/LWluLWhhbmQtZmxh/dC1pbGx1c3RyYXRp/b24tdmVjdG9yLmpw/Zw";
    const RAINY_URL = "https://imgs.search.brave.com/yeDimuubA_MzaI3EDJQ1woSmPTuNpQcFhFZariNjDmg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk3/NjM5MjgzL3Bob3Rv/L2NhdXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRi/V2Z5RHkwTnlfTnlH/QmFpQkdRTDVObGpz/RkJnX005bjVKMDNZ/M1lRanc9";
   
    return (
        
        <>
        <div className='flex justify-center mt-10'>
                <Card className="border-2 border-black rounded-lg shadow-lg" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
         <p>Temperature = {info.temp}&deg;C</p> 
         <p> Humidity = {info.humidity}&deg;C</p>
         <p>Temperature Max = {info.tempMax}&deg;C </p>
         <p>Temperature Min= {info.tempMin}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i>   and feels like {info.feelsLike}&deg;C</p>
          
        </Typography>
      </CardContent>
    
    </Card>

        </div>
        </>
    )
}