#include <stdio.h>

int main(void)
{
  int maior, u, v, i, j, iguais, maiorInterno;
  char a[200], b[200];
  while (scanf(" %[^\n]s", a) > 0 && scanf(" %[^\n]s", b) > 0)
  {
    maior = 0;
    for (u = 0; a[u] != '\0'; u++)
    {
      for (v = 0; b[v] != '\0'; v++)
        ;
      for (v = v - 1; v >= 0; v--)
      {
        i = u;
        j = v;
        iguais = 0;
        maiorInterno = 0;
        while (a[i] != '\0' && b[j] != '\0')
        {
          if (a[i] == b[j])
          {
            iguais++;
          }
          else
          {
            iguais = 0;
          }
          if (maiorInterno < iguais)
          {
            maiorInterno = iguais;
          }
          i++;
          j++;
        }
        if (maior < maiorInterno)
        {
          maior = maiorInterno;
        }
      }
    }
    printf("%d\n", maior);
  }

  return 0;
}