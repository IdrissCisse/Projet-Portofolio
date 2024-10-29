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
  cardHeight = 140,
  titleSize = '1.5rem',
  textSize = '1.2rem',
  actionContent = 'Learn More',
  onActionClick,
  itemsAlignment = 'flex-start',
  itemsDirection = 'column',
  itemsHeight = '3rem',
}) {
  return (
    <Card sx={{ width: cardWidth }}>
      <CardMedia sx={{ height: cardHeight }} image={image} title={title} />
      <CardContent sx={{ backgroundColor: bgColor }}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            color: textColor,
            fontSize: titleSize,
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
          }}
        >
          {items.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ color: textColor, marginBottom: '8px', fontSize: textSize }}
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
