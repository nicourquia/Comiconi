import React, { useState, useEffect} from 'react';

const comics = [
  {   
      "id": 1,
      "titulo": "THE AMAZING SPIDER-MAN 00 DE VUELTA A LAS BASES",
      "autor": "Nick Spencer", 
      "descripcion": "Un reboot de nuestro amistoso y vecino spider-man, en donde se encontrará con nuevos villanos. Con el amor de su vida, Mart Jane y con viejos amigos. Escrito por Nick Spencer",
      "precio": 3500,
      "imagen": "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/42009/9786075688152.jpg"
  },
  {   
      "id": 2,
      "titulo": "THE AMAZING SPIDER-MAN 06 PELIGROS Y AMENAZAS",
      "autor": "Nick Spencer", 
      "descripcion": "Spider-Man no puede estar en cuatro lugares a la vez ¿¡o si?! La vida de Peter Parker no para de complicarse, y quizás la ciencia tenga la solución. Mientras tanto, J. Jonah Jameson comienza su nueva vida como anfitrión de podcast, ¡y su primer invitado es Spider-Man! ¡Además, el trepamuros deberá probar su suerte en un casino de supervillanos manejado por el mismísimo Chance! Y cuando esté contra las cuerdas, puede que su última esperanza resida en la ayuda de su aliado menos esperado... ¡Boomerang!",
      "precio": 2100,
      "imagen": "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/43799/9786076360842.jpg"
  },
  {   
      "id": 3,
      "titulo": "THE AMAZING SPIDER-MAN 08 EL REGRESO DEL GREEN GOBLIN",
      "autor": "Nick Spencer", 
      "descripcion": "¿Cuánto puede estirarse Spider-Man antes de quebrarse? ¡Nick Spencer y una horda de talentosos artistas celebran el aniversario en USA de Amazing Spider-Man llevando al lanzarredes hasta el límite!. El Revivido comepecados es más poderoso que nunca gracias a Kindred... ¡y cuando su reino del terror comienza a causar estragos, el Green Goblin regresa! Norman Osborn está aquí, y su tortuoso pasado los atormentará a él y a Peter PArker. ¡Spidey ha pasado por mucho estos últimos años, pero incluso sus peores momentos solo han sido el preludio a esto! ¿Podrán sus amigos ayudarlo a superar esta prueba? ¡Mile sMorales, Spider-Woman, Ghost-Spider, Spider-Girl y Madame Web se unen a una nueva Orden de la Red nace!",
      "precio": 2100,
      "imagen": "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/44838/9786076363171.jpg"
  },
  {   
      "id": 4,
      "titulo": "MS MARVEL 03 EJERCITO DE UNA SOLA",
      "autor": "G. WILLOW WILSON", 
      "descripcion": "¡Ms. Marvel llega a las grandes ligas! Cuidado, mundo... ¡Kamala Khan es una avenger! Pero ¿acaso está preparada para estar entre los héroes más poderosos de la Tierra? La Ciudad de Jersey aún necesita a su defensora, ¡y a una compañía constructoraque usurpó la imagen de Ms. marvel para su proyecto le importa más la gentrificación que las bienes raíces! Mientras tanto, ¿con quién está pasando tanto tiempo Bruno? Y cuando Kamala cree un ejército de autómatas para ayudarla a combatir el crimen, ¿comprenderá que demasiadas Ms. Marvel son de hecho algo malo? Y luego, cuando una nueva GUERRA CIVIL superhumana estalle, los jóvenes avengers Spider-Man, Ms. Marvel y Nova tendrán más cosas de las que preocuparse... ¡como una competencia académica! Pero cuando Kamala sea llamada para combatir en el frente de la batalla, aprenderá una valiosa lección: ¡nunca conozcas a tus héroes.",
      "precio": 3200,
      "imagen": "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/45118/9786076363829.jpg"
  },
  {   
      "id": 5,
      "titulo": "WOLVERINE LA GUARDIA DEL INFINITO (HC)",
      "autor": "GERRY DUGGAN", 
      "descripcion": "¡Logan se vuelve cósmico! Wolverine ha regresado, sano y salvo. Pero espera, ¿no tenía una gema del infinito? ¿¡Cómo ocurrió eso?! ¿Y no estuvo apareciendo por todos lados por un tiempo? Las respuestas finalmente se revelan cuando Logan unió fuerzas con el dios de las travesuras favorito de todos, ¡Loki Laufeyson! Wolverine es el mejor en lo que hace. Pero, ¿qué tan bueno es para proteger el universo del desastre cósmico? ¿Será mejor o peor que Loki, el autoproclamado señor de las mentiras? ¡Estamos a punto de averiguarlo! Pero una cosa es segura: ¡las garras de Logan serán útiles contras las notorias e imparables máquinas de matar conocidas como la Fraternidad de los Raptors!",
      "precio": 2500,
      "imagen": "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/40625/9786075685694.jpg"
  }
]

export default function CardProduct() {

  return (
    <div>

      {/* <Box component={'span'} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {comics.map((comic) => (
          <Card sx={{ maxWidth: 345, m: 1 }}>
          <CardMedia
            component="img"
            alt={comic.titulo}
            image={comic.imagen}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {comic.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary" Wrap sx={{height: 100, overflow: "hidden"}}>
              {comic.descripcion}
            </Typography>
            <Typography variant='h5'>
                $ {comic.precio}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Añadir al Carrito</Button>
            <Button size="small">Ver Producto</Button>
          </CardActions>
        </Card>
          ))}
      </Box> */}
    </div>
  );
}