import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({
  title,
  image,
  items,
  showActions = true,
  bgColor = 'white',
  textColor = 'black',
  cardWidth = 345,
  cardHeight = '8rem',
  titleSize = '1.5rem',
  textSize = '1.2rem',
  actionContent = 'Learn More',
  onActionClick,
  itemsAlignment = 'flex-start',
  itemsDirection = 'column',
  itemsHeight = '3rem',
  itemsGap,
}) {
  return (
    <Card sx={{ width: cardWidth }}>
      <CardMedia
        sx={{
          height: {
            xs: '6rem',
            sm: '10rem',
            md: '13rem',
            lg: '14rem',
            xl: cardHeight,
          },
        }}
        image={image}
        title={title}
      />
      <CardContent sx={{ backgroundColor: bgColor }}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            color: textColor,
            fontSize: {
              xs: '1.2rem',
              sm: '1.3rem',
              md: '1.4rem',
              lg: titleSize,
              xl: titleSize,
            },
            fontWeight: '500',
          }}
        >
          {title}
        </Typography>
            <div
            style={{
              display: 'flex',
              justifyContent: itemsAlignment,
              flexDirection: itemsDirection,
              height: itemsHeight,
              gap: itemsGap,
            }}
          >
          {items.map((item, index) => (
            <Typography
             component="div"
              key={index}
              variant="body2"
              sx={{
                color: textColor,
                marginBottom: '8px',
                fontSize: {
                  xs: '0.95rem',
                  sm: '1rem',
                  md: '1.1rem',
                  lg: textSize,
                  xl: textSize,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </div>
      </CardContent>
      {showActions && (
        <CardActions>
          <Button
            size="small"
            onClick={onActionClick}
            sx={{ height: '1.7rem' }}
          >
            {actionContent}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
