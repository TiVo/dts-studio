��/ /   T H I S   C O D E   A N D   I N F O R M A T I O N   I S   P R O V I D E D   " A S   I S "   W I T H O U T   W A R R A N T Y   O F  
 / /   A N Y   K I N D ,   E I T H E R   E X P R E S S E D   O R   I M P L I E D ,   I N C L U D I N G   B U T   N O T   L I M I T E D   T O  
 / /   T H E   I M P L I E D   W A R R A N T I E S   O F   M E R C H A N T A B I L I T Y   A N D / O R   F I T N E S S   F O R   A  
 / /   P A R T I C U L A R   P U R P O S E .  
 / /  
 / /   C o p y r i g h t   ( c )   M i c r o s o f t   C o r p o r a t i o n .   A l l   r i g h t s   r e s e r v e d  
 / /  
 / /   F i l e   N a m e :  
 / /  
 / /         U S B M o n - B i d i - E x t e n s i o n . j s  
 / /  
 / /   A b s t r a c t :  
 / /  
 / /         S a m p l e   U S B M O N   J a v a s c r i p t   e x t e n s i o n   f i l e   f o r   v 4   p r i n t e r   d r i v e r s .  
  
 / /   A d d   a   r e f e r e n c e   t h a t   p r o v i d e s   i n t e l l i s e n s e   i n f o r m a t i o n   f o r   W i n d o w s   8   A P I s .  
 / / /   < r e f e r e n c e   p a t h = " v 4 P r i n t D r i v e r - I n t e l l i s e n s e . j s "   / >  
  
 f u n c t i o n   g e t S c h e m a s ( s c r i p t C o n t e x t ,   p r i n t e r S t r e a m ,   s c h e m a R e q u e s t s ,   p r i n t e r B i d i S c h e m a R e s p o n s e s )   {  
         / / /   < s u m m a r y >  
         / / /         G e t   t h e   r e q u e s t e d   S c h e m a ( s ) .  
         / / /  
         / / /         T h e   s c r i p t   c a n   u s e   t h e   ' s c h e m a R e q u e s t s '   o b j e c t   t o   i t e r a t e   t h r o u g h   t h e   Q u e r y   K e y s   r e q u e s t e d   b y   t h e   u s e r .   B a s e d   o n   t h e   q u e r y   k e y s ,  
         / / /         t h e   s c r i p t   s h o u l d   u s e   t h e   ' p r i n t e r S t r e a m '   o b j e c t   t o   c o m m u n i c a t e   w i t h   t h e   U S B   p r i n t   d e v i c e   a n d   d e t e r m i n e   t h e   v a l u e s   o f   o n e   o r   m o r e   B i d i  
         / / /         S c h e m a   e l e m e n t s .   F o r   e a c h   B i d i   S c h e m a   e l e m e n t   t h e   n e w   v a l u e   c a n   b e   r e t u r n e d   t o   t h e   c a l l e r   b y   u s i n g   f u n c t i o n s   o f   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '  
         / / /         o b j e c t .   O n c e   a l l   q u e r y   k e y s   h a v e   b e e n   p r o c e s s e d   a n d   a l l   v a l u e s   a d d e d   t o   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t   t h e   s c r i p t   c a n   r e t u r n .  
         / / /  
         / / /         I t   i s   p o s s i b l e   t h e   a t t a c h e d   d e v i c e   i s   n o t   r e a d y   t o   r e t u r n   s o m e   o f   t h e   r e q u e s t e d   d a t a .   I n   t h i s   c a s e   t h e   f u n c t i o n   c a n   r e t u r n   a   v a l u e   o f   1   t o   i n d i c a t e   t h e   c a l l  
         / / /         s h o u l d   b e   r e t r i e d   a f t e r   a   w a i t .  
         / / /   < / s u m m a r y >  
         / / /   < p a r a m   n a m e = " s c r i p t C o n t e x t "   t y p e = " I P r i n t e r S c r i p t C o n t e x t " >  
         / / /           S c r i p t   c o n t e x t   o b j e c t .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r S t r e a m "   t y p e = " I P r i n t e r S c r i p t a b l e S e q u e n t i a l S t r e a m " >  
         / / /         A l l o w s   t h e   s c r i p t   t o   W r i t e / R e a d   d a t a   f r o m   t h e   a t t a c h e d   U S B   d e v i c e .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " s c h e m a R e q u e s t s "   t y p e = " A r r a y " >  
         / / /         A r r a y   o f   s t r i n g s   t h a t   c o n t a i n s   a l l   t h e   r e q u e s t e d   Q u e r y   K e y s .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r B i d i S c h e m a R e s p o n s e s "   t y p e = " I P r i n t e r B i d i S c h e m a R e s p o n s e s " >  
         / / /         O b j e c t   t h e   s c r i p t   w i l l   u s e   t o   s t o r e   a l l   r e s p o n s e s   t o   q u e r y   k e y s .  
         / / /   < / p a r a m >  
         / / /   < r e t u r n s   t y p e = " N u m b e r "   i n t e g e r = " t r u e " >  
         / / /           I n t e g e r   v a l u e   i n d i c a t i n g   f u n c t i o n   c o m p l e t i o n   s t a t u s .  
         / / /                   1   -   T h e   a t t a c h e d   d e v i c e   w a s   n o t   r e a d y   t o   p r o v i d e   s o m e   r e q u e s t e d   i n f o r m a t i o n .   C a l l   t h e   f u n c t i o n   a g a i n   u s i n g   a n y   R e q u e r y   K e y s   a d d e d   d u r i n g   p r o c e s s i n g .  
         / / /                   0   -   T h e   s c r i p t   c o m p l e t e d   s u c c e s s f u l y .  
         / / /   < / r e t u r n s >  
  
         v a r   r e t V a l   =   0 ;  
  
         / /   L o o p   t h r o u g h   a l l   t h e   Q u e r y K e y s   p r o v i d e d   i n   t h e   s c h e m a R e q u e s t s   o b j e c t .  
         f o r   ( v a r   i n d e x   =   0 ;   i n d e x   <   s c h e m a R e q u e s t s . l e n g t h ;   i n d e x + + )   {  
                 v a r   k e y   =   s c h e m a R e q u e s t s [ i n d e x ] ;  
  
                 / /   P r o c e s s   t h e   " C o n f i g u r a t i o n "   Q u e r y   k e y .  
                 i f   ( k e y   = = =   " C o n f i g u r a t i o n " )   {  
  
                         / /   W r i t e   c o m m a n d   d a t a   t o   t h e   d e v i c e   a n d   r e a d   t h e   r e s p o n s e .  
                         / /   T h i s   c o m m a n d   c h e c k s   i f   t h e   d u p l e x i n g   u n i t   i s   i n s t a l l e d .  
                         v a r   d u p l e x I n s t a l l e d   =   f a l s e ;  
                         v a r   w r i t e D a t a C o n f i g   =   [ 0 x 0 D ,   0 x 0 D ,   0 x 0 2 ,   0 x C A ,   0 x F E ] ;  
                         v a r   b y t e s W r i t t e n C o n f i g   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a C o n f i g ) ;  
                         i f   ( b y t e s W r i t t e n C o n f i g   = = =   5 )   {  
                                 / /   C o r r e c t   n u m b e r   o f   b y t e s   w e r e   w r i t t e n .   N o w   r e a d   t h e   r e s p o n s e   f r o m   t h e   d e v i c e .  
                                 v a r   r e a d B u f f e r C o n f i g   =   p r i n t e r S t r e a m . r e a d ( 6 4 ) ;  
                                 i f   ( r e a d B u f f e r C o n f i g . l e n g t h   = = =   1 )   {  
                                         / /   A   v a l u e   o f   1   i n d i c a t e s   t h e   d u p l e x i n g   u n i t   i s   i n s t a l l e d .  
                                         v a r   d a t a   =   r e a d B u f f e r C o n f i g . s h i f t ( ) ;  
                                         i f   ( d a t a   = = =   1 )   {  
                                                 d u p l e x I n s t a l l e d   =   t r u e ;  
                                         }   e l s e   i f   ( d a t a   = = =   2 )   {  
                                                 / /   T e l l   U S B M o n   t o   c a l l   t h i s   f u n c t i o n   a g a i n   a f t e r   a   t i m e o u t   p e r i o d .  
                                                 / /   R e t r y   t h e   " C o n f i g u r a t i o n "     q u e r y   k e y .  
                                                 r e t V a l   =   1 ;  
                                                 p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d R e q u e r y K e y ( " C o n f i g u r a t i o n " ) ;  
                                         }  
                                 }  
                         }  
                         / /   I f   t h e   d e v i c e   w a s   a b l e   t o   p r o c e s s   t h e   r e q u e s t   f o r   D u p l e x   s t a t u s   c o r r e c t l y ,  
                         / /   a d d   t h e   r e s p o n s e   t o   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t   f o r   p r o c e s s i n g   b y   U S B M o n   u p o n   f u n c t i o n   c o m p l e t i o n .  
                         i f   ( r e t V a l   = = =   0 )   {  
                                 p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d B o o l ( " \ \ P r i n t e r . C o n f i g u r a t i o n . D u p l e x U n i t : I n s t a l l e d " ,   d u p l e x I n s t a l l e d ) ;  
                         }  
  
                         / /   W r i t e   c o m m a n d   d a t a   t o   t h e   d e v i c e   a n d   r e a d   t h e   r e s p o n s e .  
                         / /   T h i s   c o m m a n d   r e q u e s t s   t h e   c u r r e n t   m e m o r y   s i z e .  
                         v a r   m e m S i z e   =   0 ;  
                         v a r   w r i t e D a t a M e m   =   [ 0 x 0 D ,   0 x 0 D ,   0 x 0 2 ,   0 x A B ,   0 x C D ] ;  
                         v a r   b y t e s W r i t t e n M e m   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a M e m ) ;  
                         i f   ( b y t e s W r i t t e n M e m   = = =   5 )   {  
                                 / /   C o r r e c t   n u m b e r   o f   b y t e s   w e r e   w r i t t e n .   N o w   r e a d   t h e   r e s p o n s e   f r o m   t h e   d e v i c e .  
                                 / /   C o n v e r t   t h e   i n c o m i n g   b y t e s   t o   a   s t r i n g   t h e n   c o n v e r t   t h e   s t r i n g   t o   a   n u m b e r .  
                                 v a r   r e a d B u f f e r M e m   =   p r i n t e r S t r e a m . r e a d ( 6 4 ) ;  
                                 v a r   b y t e s R e a d M e m   =   r e a d B u f f e r M e m . l e n g t h ;  
                                 f o r   ( v a r   i   =   0 ;   i   <   b y t e s R e a d M e m ;   i + + )   {  
                                         / /   R e a d   a   b y t e   a t   a   t i m e   f r o m   t h e   s t r e a m   a n d   c o n v e r t   t o   a n   i n t e g e r .  
                                         m e m S i z e   * =   2 5 6 ;  
                                         m e m S i z e   + =   r e a d B u f f e r M e m . s h i f t ( ) ;  
                                 }  
                         }  
                         / /   A d d   t h e   r e s p o n s e   t o   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t   f o r   p r o c e s s i n g   b y   U S B M o n   u p o n   f u n c t i o n   c o m p l e t i o n .  
                         p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d I n t 3 2 ( " \ \ P r i n t e r . C o n f i g u r a t i o n . M e m o r y : S i z e " ,   m e m S i z e ) ;  
  
                         / /   R e a d   a   p r o p e r t y   f r o m   t h e   Q u e u e   P r o p e r t y   B a g   a n d   a d d   i t   t o   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t   f o r   p r o c e s s i n g   b y   U S B M o n   u p o n   f u n c t i o n   c o m p l e t i o n .  
                         v a r   b a g   =   s c r i p t C o n t e x t . Q u e u e P r o p e r t i e s ;  
                         v a r   q u e u e P r o p e r t y   =   b a g . G e t S t r i n g ( " Q u e u e P r o p N a m e " ) ;  
                         p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d S t r i n g ( " \ \ P r i n t e r . D e v i c e I n f o : Q u e u e P r o p e r t y " ,   q u e u e P r o p e r t y ) ;  
  
                 }   e l s e   i f   ( k e y   = = =   " I n t K e y " )   {  
                         / /   P r o c e s s   t h e   " I n t K e y "   Q u e r y   k e y .  
                         / /   W r i t e   d a t a   t o   t h e   d e v i c e .  
                         v a r   w r i t e D a t a I n t K e y   =   [ 0 x 0 D ,   0 x 0 D ,   0 x 0 4 ,   0 x D E ,   0 x A D ,   0 x B E ,   0 x E F ] ;  
                         v a r   b y t e s W r i t t e n I n t K e y   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a I n t K e y ) ;  
                         / /   A d d   t h e   r e s p o n s e   t o   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t   f o r   p r o c e s s i n g   b y   U S B M o n   u p o n   f u n c t i o n   c o m p l e t i o n .  
                         v a r   i n t R e s u l t   =   p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d I n t 3 2 ( " \ \ P r i n t e r . E x t e n s i o n : I n t e g e r V a l u e " ,   b y t e s W r i t t e n I n t K e y ) ;  
  
                 }   e l s e   i f   ( k e y   = = =   " \ \ P r i n t e r . E x t e n s i o n : S t r i n g V a l u e " )   {  
                         / /   P r o c e s s   t h e   " \ \ P r i n t e r . E x t e n s i o n : S t r i n g V a l u e "   Q u e r y   k e y .  
                         / /   W r i t e   c o m m a n d   d a t a   t o   t h e   d e v i c e   a n d   r e a d   t h e   r e s p o n s e .  
                         / /   T h i s   c o m m a n d   r e t r i e v e s   a   s t r i n g   f r o m   t h e   d e v i c e .  
                         v a r   r e a d S t r i n g   =   " " ;  
                         v a r   w r i t e D a t a S t r i n g   =   [ 0 x 0 D ,   0 x 0 D ,   0 x 0 1 ,   0 x A A ] ;  
                         v a r   b y t e s W r i t t e n S t r i n g   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a S t r i n g ) ;  
                         i f   ( b y t e s W r i t t e n S t r i n g   = = =   4 )   {  
                                 / /   C o r r e c t   n u m b e r   o f   b y t e s   w e r e   w r i t t e n .   N o w   r e a d   t h e   r e s p o n s e   f r o m   t h e   d e v i c e .  
                                 / /   C o n v e r t   t h e   i n c o m i n g   b y t e s   t o   a   s t r i n g   a n d   s t o r e   t h e   v a l u e   i n   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t .  
                                 v a r   r e a d B u f f e r S t r i n g   =   p r i n t e r S t r e a m . r e a d ( 6 4 ) ;  
                                 v a r   b y t e s R e a d S t r i n g   =   r e a d B u f f e r S t r i n g . l e n g t h ;  
                                 f o r   ( i   =   0 ;   i   <   b y t e s R e a d S t r i n g ;   i + + )   {  
                                         r e a d S t r i n g   + =   S t r i n g . f r o m C h a r C o d e ( r e a d B u f f e r S t r i n g . s h i f t ( ) ) ;  
                                 }  
                         }  
                         / /   A d d   t h e   r e s p o n s e   t o   t h e   ' p r i n t e r B i d i S c h e m a R e s p o n s e s '   o b j e c t   f o r   p r o c e s s i n g   b y   U S B M o n   u p o n   f u n c t i o n   c o m p l e t i o n .  
                         p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d S t r i n g ( " \ \ P r i n t e r . E x t e n s i o n : S t r i n g V a l u e " ,   r e a d S t r i n g ) ;  
                 }  
         }  
         r e t u r n   r e t V a l ;  
 }  
  
 f u n c t i o n   s e t S c h e m a ( s c r i p t C o n t e x t ,   p r i n t e r S t r e a m ,   p r i n t e r B i d i S c h e m a E l e m e n t )   {  
         / / /   < s u m m a r y >  
         / / /         S e t   a   r e q u e s t e d   B i d i   S c h e m a   V a l u e   i n   t h e   d e v i c e .  
         / / /  
         / / /         T h e   s c r i p t   c a n   i n t e r p r e t   t h e   i n c o m i n g   B i d i   S c h e m a   v a l u e   t o   e i t h e r   s e t   d a t a   i n   t h e   d e v i c e   o r   p e r f o r m   a n   a c t i o n   o n   t h e   d e v i c e .  
         / / /  
         / / /         I t   i s   p o s s i b l e   t h e   a t t a c h e d   d e v i c e   i s   n o t   r e a d y   t o   p r o c e s s   t h e   s p e c i f i e d   d a t a .   I n   t h i s   c a s e   t h e   f u n c t i o n   c a n   r e t u r n   a   v a l u e   o f   1   t o   i n d i c a t e   t h e   c a l l  
         / / /         s h o u l d   b e   r e t r i e d   a f t e r   a   w a i t .  
         / / /   < / s u m m a r y >  
         / / /  
         / / /   < p a r a m   n a m e = " s c r i p t C o n t e x t "   t y p e = " I P r i n t e r S c r i p t C o n t e x t " >  
         / / /           S c r i p t   c o n t e x t   o b j e c t .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r S t r e a m "   t y p e = " I P r i n t e r S c r i p t a b l e S e q u e n t i a l S t r e a m " >  
         / / /         A l l o w s   t h e   s c r i p t   t o   W r i t e / R e a d   d a t a   f r o m   t h e   a t t a c h e d   U S B   d e v i c e .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r B i d i S c h e m a E l e m e n t "   t y p e = " I P r i n t e r B i d i S c h e m a E l e m e n t " >  
         / / /         C o n t a i n s   a l l   t h e   d a t a   a s s o c i a t e d   w i t h   t h e   B i d i   S c h e m a   V a l u e   t o   s e t .  
         / / /   < / p a r a m >  
         / / /   < r e t u r n s   t y p e = " N u m b e r "   i n t e g e r = " t r u e " >  
         / / /           I n t e g e r   v a l u e   i n d i c a t i n g   f u n c t i o n   c o m p l e t i o n   s t a t u s .  
         / / /                   1   -   T h e   a t t a c h e d   d e v i c e   w a s   n o t   r e a d y   t o   p r o c e s s / s e t   t h e   r e q u e s t e d   s c h e m a .     A f t e r   a   w a i t   t h e   f u n c t i o n   s h o u l d   b e   c a l l e d   a g a i n   w i t h   t h e   s u p p l i e d   p r i n t e r B i d i S c h e m a E l e m e n t .  
         / / /                   0   -   T h e   s c r i p t   c o m p l e t e d   s u c c e s s f u l y .  
         / / /   < / r e t u r n s >  
  
         v a r   r e t V a l   =   0 ;  
         / /   R e t r i e v e   t h e   B i d i   S c h e m a   s t r i n g   t o   p r o c e s s .  
         v a r   b i d i S c h e m a   =   p r i n t e r B i d i S c h e m a E l e m e n t . n a m e ;  
         i f   ( b i d i S c h e m a   = = =   " \ \ P r i n t e r . E x t e n s i o n : D e v i c e A c t i o n " )   {  
                 / /   W r i t e   c o m m a n d   d a t a   t o   t h e   d e v i c e   b a s e d   o n   t h e   c u r r e n t   v a l u e   o f   t h e   p a s s e d   i n   ' p r i n t e r B i d i S c h e m a E l e m e n t ' .  
                 v a r   b o o l D a t a   =   p r i n t e r B i d i S c h e m a E l e m e n t . v a l u e ;  
                 v a r   w r i t e D a t a B o o l ;  
                 i f   ( b o o l D a t a )   {  
                         w r i t e D a t a B o o l   =   [ 0 x 6 5 ,   0 x 2 4 ,   0 x 0 a ] ;  
                 }   e l s e   {  
                         w r i t e D a t a B o o l   =   [ 0 x 6 5 ,   0 x 2 4 ,   0 x 0 b ] ;  
                 }  
                 v a r   b y t e s W r i t t e n B o o l   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a B o o l ) ;  
         }   e l s e   i f   ( b i d i S c h e m a   = = =   " \ \ P r i n t e r . E x t e n s i o n : C h a n g e a b l e D a t a " )   {  
                 / /   W r i t e   c o m m a n d   d a t a   t o   t h e   d e v i c e   b a s e d   o n   t h e   c u r r e n t   v a l u e   o f   t h e   p a s s e d   i n   ' p r i n t e r B i d i S c h e m a E l e m e n t ' .  
                 v a r   i n t D a t a   =   p r i n t e r B i d i S c h e m a E l e m e n t . v a l u e ;  
                 v a r   w r i t e D a t a I n t   =   [ 0 x 0 d ,   0 x 0 a ] ;  
                 w r i t e D a t a I n t [ 2 ]   =   i n t D a t a ;  
                 v a r   b y t e s W r i t t e n I n t   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a I n t ) ;  
                 i f   ( b y t e s W r i t t e n I n t   = = =   3 )   {  
                         / /   R e a d   d a t a   f r o m   t h e   U S B   d e v i c e .  
                         v a r   r e a d B u f f e r I n t   =   p r i n t e r S t r e a m . r e a d ( 6 4 ) ;  
                         v a r   b y t e s R e a d I n t   =   r e a d B u f f e r I n t . l e n g t h ;  
                         v a r   d a t a ;  
                         / /   R e s p o n s e   s h o u l d   b e   a   2   b y t e   b u f f e r .  
                         i f   ( b y t e s R e a d I n t   = = =   2 )   {  
                                 d a t a   =   r e a d B u f f e r I n t . s h i f t ( ) ;  
                                 / /   C h e c k   i f   t h i s   i s   a   C h a n g e a b l e D a t a   v a l u e   r e s p o n s e .  
                                 i f   ( d a t a   = = =   0 x 1 D )   {  
                                         / /   R e a d   t h e   d a t a   b y t e   a n d   d e t e r m i n e   i f   w e   a r e   d o n e   o r   n e e d   t o   t r y   a g a i n .  
                                         d a t a   =   r e a d B u f f e r I n t . s h i f t ( ) ;  
                                         i f   ( d a t a   = = =   0 x 0 1 )   {  
                                                 / /   T e l l   U S B M o n   t o   t r y   a g a i n .  
                                                 r e t V a l   =   1 ;  
                                         }  
                                 }  
                         }  
                 }  
         }  
         r e t u r n   r e t V a l ;  
 }  
  
 f u n c t i o n   g e t S t a t u s ( s c r i p t C o n t e x t ,   p r i n t e r S t r e a m ,   p r i n t e r B i d i S c h e m a R e s p o n s e s )   {  
         / / /   < s u m m a r y >  
         / / /         R e t r i e v e   u n s o l i c i t e d   B i d i   S c h e m a   v a l u e   u p d a t e s   f r o m   t h e   U S B   d e v i c e   d u r i n g   p r i n t i n g .  
         / / /  
         / / /         T h i s   f u n c t i o n   i s   o n l y   c a l l e d   w h e n   a   j o b   i s   p r i n t i n g .   A   d e v i c e   c a n   p r o v i d e   d a t a   o n   t h e   r e a d   c h a n n e l   w h i c h   t h i s   s c r i p t   c a n   i n t e r p r e t   i n t o  
         / / /         B i d i   S c h e m a   v a l u e s   a n d   r e t u r n e d   t o   U S B M o n .  
         / / /  
         / / /         T h i s   f u n c t i o n   w i l l   b e   c a l l e d   r e p e a t e d l y   d u r i n g   p r i n t i n g .   I t   i s   e x p e c t e d   t h e   d e v i c e   w i l l   o n l y   r e t u r n   d a t a   i f   i t   i s   a v a i l a b l e   a n d   t h e   s c r i p t   c a n   u n d e r s t a n d   i t .  
         / / /         I f   t h e   d e v i c e   d o e s   n o t   s u p p o r t   q u e r y i n g   f o r   u n s o l i c i t e d   s t a t u s   o r   t h e   s c r i p t   c a n   d e t e r m i n e   t h a t   t h e r e   i s   n o   n e e d   t o   c a l l   t h i s   f u n c t i o n   a g a i n ,   t h e   s c r i p t   c a n   r e t u r n  
         / / /         a   v a l u e   o f   2   w h i c h   w i l l   t e l l   t h e   g e t S t a t u s   e x e c u t i o n   t h r e a d   i n   U S B M o n   t o   e x i t   s u c c e s s f u l l y .  
         / / /  
         / / /         I f   t h e   p r i n t   d e v i c e   d o e s   n o t   s u p p o r t   r e t r i e v i n g   s t a t u s   d u r i n g   a   p r i n t   j o b   t h i s   f u n c t i o n   s h o u l d   b e   l e f t   o u t   o f   t h e   d r i v e r ' s   J a v a S c i p t   f i l e   a l t o g e t h e r .   T h i s   w i l l   i n f o r m    
         / / /         U S B M o n   t o   s k i p   i n v o c a t i o n   o f   t h e   f u n c t i o n .  
         / / /   < / s u m m a r y >  
         / / /   < p a r a m   n a m e = " s c r i p t C o n t e x t "   t y p e = " I P r i n t e r S c r i p t C o n t e x t " >  
         / / /         A c c e s s o r   f o r   P r o p e r t y B a g s   f o r   p r i n t e r   d r i v e r   a n d   q u e u e   p r o p e r t i e s .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r S t r e a m "   t y p e = " I P r i n t e r S c r i p t a b l e S e q u e n t i a l S t r e a m " >  
         / / /         A l l o w s   t h e   s c r i p t   t o   r e a d   d a t a   f r o m   t h e   a t t a c h e d   U S B   d e v i c e .   C a l l i n g   t h e   w r i t e   f u n c t i o n   w i l l   f a i l .   T h i s   d e v i c e   i s   o p e n e d   r e a d - o n l y   f o r   t h i s   f u n c t i o n .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r B i d i S c h e m a R e s p o n s e s "   t y p e = " I P r i n t e r B i d i S c h e m a R e s p o n s e s " >  
         / / /         O b j e c t   t h e   s c r i p t   w i l l   u s e   t o   s t o r e   a l l   s t a t u s   r e s p o n s e s .  
         / / /   < / p a r a m >  
         / / /   < r e t u r n s   t y p e = " N u m b e r "   i n t e g e r = " t r u e " >  
         / / /           I n t e g e r   v a l u e   i n d i c a t i n g   f u n c t i o n   c o m p l e t i o n   s t a t u s .  
         / / /                   2   -   T h e   d e v i c e   n o   l o n g e r   ( i f   e v e r )   s u p p o r t s   u n s o l i c i t e d   s t a t u s   s o   n o   n e e d   f o r   U S B M o n   t o   m a k e   m o r e   c a l l s   t o   t h i s   f u n c t i o n .  
         / / /                   0   -   T h e   s c r i p t   c o m p l e t e d   s u c c e s s f u l y .  
         / / /   < / r e t u r n s >  
  
         v a r   r e t V a l   =   0 ;  
  
         / /   R e a d   d a t a   f r o m   t h e   U S B   d e v i c e .  
         v a r   r e a d B u f f e r S t a t u s   =   p r i n t e r S t r e a m . r e a d ( 6 4 ) ;  
         v a r   b y t e s R e a d S t a t u s   =   r e a d B u f f e r S t a t u s . l e n g t h ;  
         v a r   d a t a ;  
         / /   S t a t u s   U p d a t e s   a r e   2   b y t e   b u f f e r s .  
         i f   ( b y t e s R e a d S t a t u s   = = =   2 )   {  
                 d a t a   =   r e a d B u f f e r S t a t u s . s h i f t ( ) ;  
                 / /   C h e c k   i f   t h i s   i s   a   S t a t u s   v a l u e   r e s p o n s e .  
                 i f   ( d a t a   = = =   0 x 1 B )   {  
                         / /   R e a d   t h e   d a t a   b y t e   a n d   r e t u r n   t o   U S B M o n   f o r   p r o c e s s i n g .  
                         d a t a   =   r e a d B u f f e r S t a t u s . s h i f t ( ) ;  
                         v a r   i n t R e s u l t   =   p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d I n t 3 2 ( " \ \ P r i n t e r . E x t e n s i o n : S t a t u s V a l u e " ,   d a t a ) ;  
                 }   e l s e   i f   ( d a t a   = = =   0 x 2 B )   {  
                         / /   T h i s   v a l u e   s i g n i f i e s   t h e   d e v i c e   w i l l   n o t   r e t u r n   a d d i t i o n a l   s t a t u s   v a l u e s   s o   t h e   t h r e a d   c a n   e x i t .  
                         r e t V a l   =   2 ;  
                 }  
         }  
  
         r e t u r n   r e t V a l ;  
 }  
  
 f u n c t i o n   r e q u e s t S t a t u s ( s c r i p t C o n t e x t ,   p r i n t e r S t r e a m ,   p r i n t e r B i d i S c h e m a R e s p o n s e s )   {  
         / / /   < s u m m a r y >  
         / / /         R e t r i e v e   s o l i c i t e d   B i d i   S c h e m a   v a l u e   u p d a t e s   f r o m   t h e   U S B   d e v i c e   d u r i n g   p r i n t i n g .  
         / / /         T h i s   f u n c t i o n   w i l l   b e   c a l l e d   i n s t e a d   o f   g e t S t a t u s   i f   t h e   d e v i c e   P r i n t e r   D r i v e r   s p e c i f i e s   a n   a l t e r n a t e   B i d i U S B S t a t u s I n t e r f a c e   t o   a l l o w   w r i t e / r e a d   o p e r a t i o n s  
         / / /         t h a t   d o n ' t   c o n f l i c t   w i t h   t h e   p r i n t   d a t a   b e i n g   s e n t   o v e r   t h e   p r i m a r y   U S B   P r i n t   I n t e r f a c e .  
         / / /  
         / / /         T h i s   f u n c t i o n   i s   o n l y   c a l l e d   w h e n   a   j o b   i s   p r i n t i n g .   A   d e v i c e   c a n   w r i t e / r e a d   d a t a   t o   t h e   A l t e r n a t e   i n t e r a c e   w h i c h   t h i s   s c r i p t   c a n   i n t e r p r e t   i n t o  
         / / /         B i d i   S c h e m a   v a l u e s   a n d   r e t u r n e d   t o   U S B M o n .  
         / / /  
         / / /         T h i s   f u n c t i o n   w i l l   b e   c a l l e d   r e p e a t e d l y   d u r i n g   p r i n t i n g .   I t   i s   e x p e c t e d   t h e   d e v i c e   w i l l   o n l y   r e t u r n   d a t a   i f   i t   i s   a v a i l a b l e   a n d   t h e   s c r i p t   c a n   u n d e r s t a n d   i t .  
         / / /         I f   t h e   d e v i c e   d o e s   n o t   s u p p o r t   q u e r y i n g   f o r   s o l i c i t e d   s t a t u s   o r   t h e   s c r i p t   c a n   d e t e r m i n e   t h a t   t h e r e   i s   n o   n e e d   t o   c a l l   t h i s   f u n c t i o n   a g a i n ,   t h e   s c r i p t   c a n   r e t u r n  
         / / /         a   v a l u e   o f   2   w h i c h   w i l l   t e l l   t h e   r e q u e s t S t a t u s   e x e c u t i o n   t h r e a d   i n   U S B M o n   t o   e x i t   s u c c e s s f u l l y .  
         / / /  
         / / /         I f   t h e   p r i n t   d e v i c e   d o e s   n o t   s u p p o r t   r e t r i e v i n g   s t a t u s   d u r i n g   a   p r i n t   j o b   v i a   a n   a l t e r n a t e   B i d i U S B S t a t u s I n t e r f a c e   t h i s   f u n c t i o n   s h o u l d   b e   l e f t   o u t   o f   t h e   d r i v e r ' s   J a v a S c i p t    
         / / /         f i l e   a l t o g e t h e r .   T h i s   w i l l   i n f o r m   U S B M o n   t o   s k i p   i n v o c a t i o n   o f   t h e   f u n c t i o n .  
         / / /   < / s u m m a r y >  
         / / /   < p a r a m   n a m e = " s c r i p t C o n t e x t "   t y p e = " I P r i n t e r S c r i p t C o n t e x t " >  
         / / /         A c c e s s o r   f o r   P r o p e r t y B a g s   f o r   p r i n t e r   d r i v e r   a n d   q u e u e   p r o p e r t i e s .  
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r S t r e a m "   t y p e = " I P r i n t e r S c r i p t a b l e S e q u e n t i a l S t r e a m " >  
         / / /         A l l o w s   t h e   s c r i p t   t o   w r i t e / r e a d   d a t a   f r o m   t h e   a t t a c h e d   U S B   d e v i c e .    
         / / /   < / p a r a m >  
         / / /   < p a r a m   n a m e = " p r i n t e r B i d i S c h e m a R e s p o n s e s "   t y p e = " I P r i n t e r B i d i S c h e m a R e s p o n s e s " >  
         / / /         O b j e c t   t h e   s c r i p t   w i l l   u s e   t o   s t o r e   a l l   s t a t u s   r e s p o n s e s .  
         / / /   < / p a r a m >  
         / / /   < r e t u r n s   t y p e = " N u m b e r "   i n t e g e r = " t r u e " >  
         / / /           I n t e g e r   v a l u e   i n d i c a t i n g   f u n c t i o n   c o m p l e t i o n   s t a t u s .  
         / / /                   2   -   T h e   d e v i c e   n o   l o n g e r   ( i f   e v e r )   s u p p o r t s   s o l i c i t e d   s t a t u s   s o   n o   n e e d   f o r   U S B M o n   t o   m a k e   m o r e   c a l l s   t o   t h i s   f u n c t i o n .  
         / / /                   0   -   T h e   s c r i p t   c o m p l e t e d   s u c c e s s f u l y .  
         / / /   < / r e t u r n s >  
  
         v a r   r e t V a l   =   0 ;  
  
         / /   W r i t e   d a t a   t o   t h e   d e v i c e   r e q u e s t i n g   S t a t u s   d a t a .  
         v a r   w r i t e D a t a S t a t u s   =   [ 0 x 0 C ,   0 x 0 C ] ;  
         v a r   b y t e s W r i t t e n S t a t u s   =   p r i n t e r S t r e a m . w r i t e ( w r i t e D a t a S t a t u s ) ;  
  
         i f   ( b y t e s W r i t t e n S t a t u s   = = =   2 )   {  
               / /   R e a d   d a t a   f r o m   t h e   U S B   d e v i c e .  
               v a r   r e a d B u f f e r S t a t u s   =   p r i n t e r S t r e a m . r e a d ( 6 4 ) ;  
               v a r   b y t e s R e a d S t a t u s   =   r e a d B u f f e r S t a t u s . l e n g t h ;  
               v a r   d a t a ;  
               / /   S t a t u s   U p d a t e s   a r e   2   b y t e   b u f f e r s .  
               i f   ( b y t e s R e a d S t a t u s   = = =   2 )   {  
                       d a t a   =   r e a d B u f f e r S t a t u s . s h i f t ( ) ;  
                       / /   C h e c k   i f   t h i s   i s   a   S t a t u s   v a l u e   r e s p o n s e .  
                       i f   ( d a t a   = = =   0 x 1 B )   {  
                               / /   R e a d   t h e   d a t a   b y t e   a n d   r e t u r n   t o   U S B M o n   f o r   p r o c e s s i n g .  
                               d a t a   =   r e a d B u f f e r S t a t u s . s h i f t ( ) ;  
                               v a r   i n t R e s u l t   =   p r i n t e r B i d i S c h e m a R e s p o n s e s . a d d I n t 3 2 ( " \ \ P r i n t e r . E x t e n s i o n : S t a t u s V a l u e " ,   d a t a ) ;  
                       }   e l s e   i f   ( d a t a   = = =   0 x 2 B )   {  
                               / /   T h i s   v a l u e   s i g n i f i e s   t h e   d e v i c e   w i l l   n o t   r e t u r n   a d d i t i o n a l   s t a t u s   v a l u e s   s o   t h e   t h r e a d   c a n   e x i t .  
                               r e t V a l   =   2 ;  
                       }  
               }  
         }  
  
         r e t u r n   r e t V a l ;  
 }  
  
  
 