#include <stdio.h>

int main(void)
{
  int N, i, j;
  char v[16], s, r;

  scanf("%d", &N);
  for (i = 0; i < N; i++)
  {
    scanf(" %[^\n]s", v);
    for (j = 0; v[j] != ' '; j++)
      ;
    r = v[2];
    s = v[j + 3];
    if (r == 's')
    {
      if (s == 'p' || s == 'g')
      {
        printf("rajesh\n");
      }
      else if (s == 'd' || s == 'o')
      {
        printf("sheldon\n");
      }
      else
      {
        printf("empate\n");
      }
    }
    else if (r == 'p')
    {
      if (s == 'd' || s == 'o')
      {
        printf("rajesh\n");
      }
      else if (s == 's' || s == 'g')
      {
        printf("sheldon\n");
      }
      else
      {
        printf("empate\n");
      }
    }
    else if (r == 'd')
    {
      if (s == 'g' || s == 's')
      {
        printf("rajesh\n");
      }
      else if (s == 'p' || s == 'o')
      {
        printf("sheldon\n");
      }
      else
      {
        printf("empate\n");
      }
    }
    else if (r == 'g')
    {
      if (s == 'p' || s == 'o')
      {
        printf("rajesh\n");
      }
      else if (s == 's' || s == 'd')
      {
        printf("sheldon\n");
      }
      else
      {
        printf("empate\n");
      }
    }
    else
    {
      if (s == 's' || s == 'd')
      {
        printf("rajesh\n");
      }
      else if (s == 'p' || s == 'g')
      {
        printf("sheldon\n");
      }
      else
      {
        printf("empate\n");
      }
    }
  }
  return 0;
}