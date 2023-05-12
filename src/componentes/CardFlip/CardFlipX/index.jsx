import React from 'react';
import styles from './CardFlipX.module.scss';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

export default function CardFlipX({ imagem, titulo, texto }) {
    return (
        <section className={styles.cardFlip}>            
            <div className={styles.cardContainer}>
                <Card className={styles.cardFront} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imagem}
                            alt="Logo da LithtleZ"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {titulo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {texto}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.cardBack}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={imagem}
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
            </div>
        </section>

    )
}
