/*
Developpe par
/\oo/\
Jacques MEUNIER
http://www.sesame-ouvre-toi.net
*/
safari="non";
if (navigator.appVersion.indexOf("Safari") > -1)
	{safari="oui";}

passage=0;
tabl = new Array();       
tabc = new Array();
defi = new Array();
nbgrille = 3;	/* nombre de grilles dans la page */  

/* grille 1 */
tabl[1] = 8;  /* nombre de lignes */
tabc[1] = 10; /* nombre de colonnes */

/*horizontal*/
defi[11] = "A<br>- S.D.F."
defi[12] = "B<br>- Il y fait chaud<br>- Un homme sale peut quand même le faire"
defi[13] = "C<br>- Toucheraient"
defi[14] = "D<br>- Surface<br>- Choix<br>- Place"
defi[15] = "E<br>- Serons gais"
defi[16] = "F<br>- Il a sa piste<br>- Ce que fit le gladiateur avant de mourir"
defi[17] = "G<br>- Sa patte vaut un fer<br>- Deux fois"
defi[18] = "H<br>- S'est servi de son nez<br>- L'élastique a le sien"

/* vertical */
defi[19] = "1<br>- Tels des rois malpolis"
defi[110] = "2<br>- Bête de cirque"
defi[111] = "3<br>- Changer d'air<br>- Prénom phonétique"
defi[112] = "4<br>- Prière<br>- Prit le risque"
defi[113] = "5<br>- Empereur<br>- Rapport non sexuel"
defi[114] = "6<br>- Egalement"
defi[115] = "7<br>- Le dernier est à la mode<br>- Leur poids est très lourd"
defi[116] = "8<br>- Hivernal"
defi[117] = "9<br>- Fleuve d'Irlande<br>- Roi"
defi[118] = "10<br>- Ecrivait"

/* grille 2 */
tabl[2] = 10  /* nombre de lignes */
tabc[2] = 10 /* nombre de colonnes */

/*horizontal*/
defi[21] = "A<br>- Exagère"
defi[22] = "B<br>- Différences"
defi[23] = "C<br>- Guide<br>- On peut le faire jusqu'à la corde<br>- Souhaite téléphoner à la maison"
defi[24] = "D<br>- Martin Luther King le fit<br>- Quand il est sur soi la dépression n'est pas loin"
defi[25] = "E<br>- Ennui<br>- Tresse"
defi[26] = "F<br>- Un vingtième de décennie"
defi[27] = "G<br>- Calife décapité<br>- Champion<br>- Gai participe"
defi[28] = "H<br>- Nouer<br>- Telle une sauce"
defi[29] = "I<br>- a été rendue brillante<br>- Note"
defi[210] = "J<br>- Moitié jetée<br>- Fête"

/* vertical */
defi[211] = "1<br>- Carrosse avant l'heure"
defi[212] = "2<br>- Charges bêtes<br>- C'est vrai qu'elle est proche de la mort"
defi[213] = "3<br>- Ile<br>- Qualifient des culs"
defi[214] = "4<br>- Reptile<br>- Suite abrégée"
defi[215] = "5<br>- Le faire, c'est apprécier<br>- Cordage"
defi[216] = "6<br>- Vifs<br>- Article arabe"
defi[217] = "7<br>- On les met pour changer d'interlocuteur<br>- Sudiste"
defi[218] = "8<br>- Note<br>- Malaxé"
defi[219] = "9<br>- Vrai<br>- Le mâle mouette peut l'être"
defi[220] = "10<br>- Evalué<br>- D'être"

/* grille 3 */
tabl[3] = 10  /* nombre de lignes */
tabc[3] = 10 /* nombre de colonnes */

/*horizontal*/
defi[31] = "A<br>- Pédale"
defi[32] = "B<br>- La venue du printemps"
defi[33] = "C<br>- Jaune apprécié<br>- Sa part est plus importante<br>- Sous sol"
defi[34] = "D<br>- Passage<br>- A lui"
defi[35] = "E<br>- Aujourd'hui, demain<br>- Défense de l'âne"
defi[36] = "F<br>- Dans<br>- Prévenir"
defi[37] = "G<br>- Les animaux de La Fontaine en sont malades<br>- Annie de Gainsbourg le fait"
defi[38] = "H<br>- Epreuve<br>- Ile"
defi[39] = "I<br>- Elément de bain<br>- Tacheté"
defi[310] = "J<br>- Seigneuries<br>- Manche"

/* vertical */
defi[311] = "1<br>- A l'origine d'un par terre"
defi[312] = "2<br>- Stupéfiant<br>- Contracté"
defi[313] = "3<br>- Compteur de temps<br>- Article<br>- Enduit"
defi[314] = "4<br>- Pas dur devant une voyelle<br>- Le champion de 100 m devrait l'enlever"
defi[315] = "5<br>- Après<br>- Alerte"
defi[316] = "6<br>- Qualifie un blanc<br>- Amas"
defi[317] = "7<br>- Personnes indésirables"
defi[318] = "8<br>- Eclat de peste<br>- Mortes, sur toile"
defi[319] = "9<br>- Heureusement<br>- Détecté"
defi[320] = "10<br>- Piquant<br>- Puis"



l=0
c=0      
nc=""
test=0 
grille=0;

document.onkeyup = showKeyUp
function showKeyUp(evt) {
evt = (evt) ? evt : window.event
fleche(evt.keyCode)
return
}

function met_page(g) {
ancienne_grille=document.getElementById("grille_precedente").value
if (ancienne_grille != 0) {
	nbd=tabl[ancienne_grille]+tabc[ancienne_grille]
	for (k=1;k<=nbd;k++) {
		d="defi"+ancienne_grille+k
		hs.close(d)
	}		
}
grille=g
nc="*"
test=0 
l=tabl[grille]+1
c=tabc[grille]+1

switch (g) {
case 1:		// GRILLE 1
		/* tableau de la grille */
		var mc = new Array(l);
		mc[1] =  "ROMANICHEL"
		mc[2] =  "ETUVE*RIRE"
		mc[3] =  "TATERAIENT"
		mc[4] =  "ARE*OU*MET"
		mc[5] =  "RIRONS*A*R"
		mc[6] =  "DE*S*SALUA"
		mc[7] =  "E*LAPIN*BI"
		mc[8] =  "SENTI*SAUT"
		break;
 
 case 2:	// GRILLE 2
		/* tableau de la grille */
		var mc = new Array(l);
		mc[1] =  "CARICATURE"
		mc[2] =  "INEGALITES"
		mc[3] =  "TE*USER*ET"
		mc[4] =  "REVA*REPLI"
		mc[5] =  "OS*NATTE*M "
		mc[6] =  "U*SEMESTRE"
		mc[7] =  "IFE*AS*RI*"
		mc[8] =  "LACER*LIEE"
		mc[9] =  "LUSTREE*UT"
		mc[10] = "EX*CELEBRE"
		break;
		
case 3:		// GRILLE 3
		/* tableau de la grille */
		var mc = new Array(l);
		mc[1] =  "CHAMPIGNON"
		mc[2] =  "RENOUVEAU*"
		mc[3] =  "OR*LION*FA"
		mc[4] =  "COL*SIEN*C"
		mc[5] =  "HIER*RUADE"
		mc[6] =  "EN*ALERTER"
		mc[7] =  "PESTE*SUCE"
		mc[8] =  "I*TEST*RE*"
		mc[9] =  "EAU*TAVELE"
		mc[10] = "DUCHES*SET"
		break;
 default: 
	alert("erreur chargement")
	return
	break;
	
} //fin switch



gr = new Array(l);
for (i=0;i<gr.length;i++)
    gr[i]= new Array(c);

for (i=0;i<l-1;i++)
    {
    for (j=0;j<c-1;j++)
        {
        v=mc[i+1]
        vc=v.charAt(j)
        gr[i+1] [j+1]=vc
        }
    }
document.getElementById("grille_precedente").value=grille	
setTimeout("voir()",10); 
}

function voir()
{
tt='<center><table class="grille">'+"\n"
for (i=0;i<l;i++)
    {
    vi=""+i
    imi='images/c'+vi
    imi=imi+'.gif'
	cible='defi'+grille+i
	if (safari == "non")
		{imi2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').click()">'}
	else
		{imi2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').onclick()">'}

    imi2=imi2+"<IMG SRC='"+imi+"'></A>"
    tt=tt+'<TR>'+"\n"
    for (j=0;j<c;j++)
        {
        vj=""+j
        cj=j+l-1
        imj='images/l'+vj
        imj=imj+'.gif'
		k=i+j
		cible='defi'+grille+cj
		if (safari == "non")
			{imj2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').click()">'}
		else
			{imj2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').onclick()">'}
			
        imj2=imj2+'<IMG SRC="'+imj+'"></A>'
        nc="l"+vi+"c"+vj 
        tt=tt+'<TD'+"\n"
        if (i==0 && j==0)
           tt=tt+'> ' 
        else if (i==0)
           {
            tt=tt+'>'
            tt=tt+imj2
            tt=tt+''
            
           } 
        else if(j==0)
           {
            tt=tt+'>'
            tt=tt+imi2
           }
        else if (gr[i] [j]=="*") 
           {
           tt=tt+'><IMG SRC="images/noir.gif">'+"\n"
           }
        else
           {
		   if (i<10)
			   {ai="0"+i}
			else
			   {ai=""+i}
		   if (j<10)
			   {aj="0"+j}
			else
			   {aj=""+j}	      
		   vt='><INPUT class="case" TYPE="text"  ID="'
		   vt=vt+nc
		   vt=vt+'" VALUE="" SIZE="1" MAXLENGTH=1 onFocus="foc('+i+','+j+')" onKeyUp="this.value=this.value.toUpperCase();passage=1">'		   
		   tt=tt+vt+"\n"
           }
        tt=tt+'</TD>'+"\n"
        }
    tt=tt+'</TR>'+"\n"
    }
tt=tt+'</table></center>'+"\n"
document.getElementById("mc").innerHTML = tt
document.getElementById("presentation").style.visibility = "visible"

return
}

function verif()
{
mp=0
tt='<center><table class="grille">'+"\n"
for (i=0;i<l;i++)
    {
    vi=""+i
    imi='images/c'+vi
    imi=imi+'.gif'
	cible='defi'+grille+i
	if (safari == "non")
		{imi2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').click()">'}
	else
		{imi2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').onclick()">'}	
    imi2=imi2+"<IMG SRC='"+imi+"'></A>"
    tt=tt+'<TR>'+"\n"	
    for (j=0;j<c;j++)
        {
        vg=gr[i][j]
        vj=""+j
        cj=j+l-1
        imj='images/l'+vj
        imj=imj+'.gif'
		k=i+j
		cible='defi'+grille+cj
		if (safari == "non")
			{imj2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').click()">'}
		else
			{imj2='<A HREF="javascript:document.getElementById('+"'"+cible+"'"+').onclick()">'}
        imj2=imj2+'<IMG SRC="'+imj+'"></A>'
        nc="l"+vi+"c"+vj 
        tt=tt+'<TD'
        if (i==0 && j==0)
           {tt=tt+'>'+"\n"} 
        else if (i==0)
           {  
            tt=tt+'>'+"\n"
            tt=tt+imj2
           }
        else if(j==0)
           {
            tt=tt+'>'+"\n"
            tt=tt+imi2
           }
        else if (vg=="*") 
           {
           tt=tt+'>'+"\n"+'<span class="casebonne"><IMG SRC="images/noir.gif"></span>'           
           }
        else if (vg.substring(0,1)==" ")
           {
		   vt='><span class="casebonne">'
           vg2=vg.substring(1,2)
           vt=vt+vg2
           vt=vt+'</span>'		   
           tt=tt+vt
           }           
        else
           {
		   v=document.getElementById(nc).value
           if (v==gr[i][j])
              {
              v2=" "+v+" " 
              gr[i][j] = " "+v
              vt='<span class="casebonne">'
              vt=vt+v2
              vt=vt+'</span>'           
              tt=tt+'>' 
              tt=tt+vt
              }
            else
              { 
              vt='><INPUT TYPE="text" class="case" ID="'
              vt=vt+nc
			  vt=vt+'" VALUE="" SIZE="1" MAXLENGTH=1 onFocus="foc('+i+','+j+')" onKeyUp="this.value=this.value.toUpperCase()">'			  
              tt=tt+vt
              mp=1
              }
           }
        tt=tt+'</TD>'+"\n";
        }
    tt=tt+'</TR>'+"\n"
    }
tt=tt+'</table></center>'+"\n"
if (mp==0)
   alert("G A G N E !!!")
document.getElementById("mc").innerHTML = tt
return 
}


function fleche(x)
{
vi=1

switch (x) {
case 37:	// fleche gauche
   if (tc>0)
      {
      y=tc 
      test=0
      tc--
      for (i=tc;i>0;i--)
          {
          vi=i
		  vg=gr[tl][i]
          if (vg=="*" || vg.substring(0,1)==" ")
             continue
           else
             {
             test=1 
             vlig="l"+""+tl
             vcol="c"+""+i
             vv=vlig+vcol
 			 document.getElementById(vv).focus()
             break
             }
          }
         if (test==0)
            {
            tc=y
            vlig="l"+""+tl
            vcol="c"+""+tc
            vv=vlig+vcol
			document.getElementById(vv).focus()
            }
       }
     else
      tc=1
   break;
   
case 38: 	// fleche haut
    if (tl>0)
      {
      x=tl
      test=0
      tl--
      for (i=tl;i>0;i--)
          {
	  vg=gr[i][tc]
          if (vg=="*" || vg.substring(0,1)==" ")
             continue
           else
             {
             test=1
             vlig="l"+""+i
             vcol="c"+""+tc
             vv=vlig+vcol
			 document.getElementById(vv).focus()
             break
             }
          }
         if (test==0)
            {
            tl=x
            vlig="l"+""+tl
            vcol="c"+""+tc
            vv=vlig+vcol
			document.getElementById(vv).focus()
            }
       }
     else
      tl=1  
	break;
case 39:	 // fleche droite
   if (tc<c)
      {
      y=tc
      test=0
      tc++
      for (i=tc;i<c;i++)
          {
          vi=i 
		  vg=gr[tl][i]
           if (vg=="*" || vg.substring(0,1)==" ")
             continue
           else
             {
             test=1
             vlig="l"+""+tl
             vcol="c"+""+i
             vv=vlig+vcol
			 document.getElementById(vv).focus()
             break
             }
          }
         if (test==0)
            {
            tc=y
            vlig="l"+""+tl
            vcol="c"+""+tc
            vv=vlig+vcol
			document.getElementById(vv).focus()
            } 
      } 
    else
     tc=c-1    
   break;
   
case 40: 	// fleche bas
     if (tl<l)
      {
      x=tl
      test=0
      tl++
      for (i=tl;i<l;i++)
          {
			vg=gr[i][tc]
           if (vg=="*" || vg.substring(0,1)==" ")
             continue
           else
             {
             test=1 
             vlig="l"+""+i
             vcol="c"+""+tc
             vv=vlig+vcol
			 document.getElementById(vv).focus()
             break
             }
          }
         if (test==0)
            {
            tl=x
            vlig="l"+""+tl
            vcol="c"+""+tc
            vv=vlig+vcol
			document.getElementById(vv).focus()
            }
       }
     else
      tl=l-1    
   break;
case 13:	 // enter
if (passage ==1){
	if (safari == "non")
	   {document.getElementById("entree").click()}
	  else
	   {document.getElementById("entree").onclick()}
	}   
   break;
 }  
return
}

function foc(x,y)
{
tl=x
tc=y
return
}


function charge(){
v=""
for (j=1;j<=nbgrille;j++){
	v = v + '<a class="choix_mc" href="javascript:met_page('+j+')">Grille '+j+'</a>&nbsp;&nbsp;&nbsp;&nbsp;'
	}
document.getElementById("nb_grille").innerHTML = v
charge_h();		
}



function charge_h(){		// Ecriture dans le DOM des définitions horizontales
	v_div_tout = document.getElementById("horizontal");
	for (j=1;j<=nbgrille;j++){
		for (i=1;i<=tabl[j];i++){
			indice=""+j+i;
			indice=indice*1
			/*****/
			vid="defi"+indice
			defid=defi[indice]
			d=defid.split("<br>")
				v_div_parent = document.createElement("div");
				v_a_addthis = document.createElement("a");
				v_a_addthis.setAttribute("id",vid);
				v_a_addthis.setAttribute("onclick","return hs.htmlExpand(this)");
				v_div_parent.appendChild(v_a_addthis);
			v_div_tout.appendChild(v_div_parent);	

				v_div_enfant = document.createElement("div");
				v_div_enfant.setAttribute("class","highslide-maincontent");
				v_span = document.createElement("span");
				v_span.setAttribute("class","lettre");

				for (z=0;z<d.length;z++){
					myText = document.createTextNode(d[z]);
					sautDeLigne = document.createElement('br');					
					v_span.appendChild(myText);
					v_span.appendChild(sautDeLigne);
				}
				sautDeLigne = document.createElement('br');		// pour chrome ou safari
				v_span.appendChild(sautDeLigne);
				sautDeLigne = document.createElement('br');
				v_span.appendChild(sautDeLigne);
				v_div_enfant.appendChild(v_span);
				v_div_parent.appendChild(v_div_enfant);			
			/*****/
		}
	}
charge_v()
}

function charge_v(){		// Ecriture dans le DOM des définitions verticales
	v_div_tout = document.getElementById("vertical");
	for (j=1;j<=nbgrille;j++){	
		deb=tabl[j]+1
		fin = tabl[j]+tabc[j]
		for (i=deb;i<=fin;i++){
			indice=""+j+i;
			indice=indice*1
			/*****/
			vid="defi"+indice
			defid=defi[indice]
			d=defid.split("<br>")
				v_div_parent = document.createElement("div");
				v_a_addthis = document.createElement("a");
				v_a_addthis.setAttribute("id",vid);
				v_a_addthis.setAttribute("onclick","return hs.htmlExpand(this)");
				v_div_parent.appendChild(v_a_addthis);
			v_div_tout.appendChild(v_div_parent);	

				v_div_enfant = document.createElement("div");
				v_div_enfant.setAttribute("class","highslide-maincontent");
				v_span = document.createElement("span");
				v_span.setAttribute("class","lettre");
				for (z=0;z<d.length;z++){
					myText = document.createTextNode(d[z]);
					sautDeLigne = document.createElement('br');
					v_span.appendChild(myText);
					v_span.appendChild(sautDeLigne);
				}
				sautDeLigne = document.createElement('br');  // pour chrome ou safari
				v_span.appendChild(sautDeLigne);
				sautDeLigne = document.createElement('br');
				v_span.appendChild(sautDeLigne);				
				v_div_enfant.appendChild(v_span);
				v_div_parent.appendChild(v_div_enfant);			
			/*****/
		}
	}
}