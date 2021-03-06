#include <stdio.h>
#include <stdlib.h>
#include <math.h>

double f (double x, double y) {
	return (y/5.0+x);
}
double metodoDeEuler (double x0,double y0,double h,double xf)
{
	int i= 0,n;
	double yi= y0,xi= x0;
	
	n= (xf-x0)/h;		// No. de iteraciones
	printf ("i\tx\ty\n");
	printf ("%d\t%lf\t%lf\n",i,x0,y0);
	for (i= 0; i <= n; i++)
	{
		yi= yi+h*f(xi,yi);		// yi+1
		xi= xi+h;				// xi+1
		printf ("%d\t%lf\t%lf\n",i+1,xi,yi);
	}
	return yi;
}
int main (int argc, char *argv[])
{
	double x0,y0,h,xf,va,vr;
	
	printf ("Condicion inicial (x0,y0): ");
	scanf ("%lf,%lf",&x0,&y0);
	do {
		printf ("Paso: ");
		scanf ("%lf",&h);
		if (h > 0) break;
		printf ("Valor invalido\n");
	} while (1);
	do {
		printf ("Valor final: ");
		scanf ("%lf", &xf);
		if (xf > x0) break;
	} while (1);
	va= metodoDeEuler (x0,y0,h,xf);
	if (argc > 1) {
		vr= atof (argv[1]);
		printf ("Valor real= %lf\n", vr);
		printf ("Valor aprox.= %lf\n", va);
		printf ("Error= %.2lf%%\n", fabs ((vr-va)/vr*100));
	}
}






