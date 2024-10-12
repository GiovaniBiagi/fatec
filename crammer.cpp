#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    double a[3][3]; // Matriz dos coeficientes
    double b[3];    // Vetor de constantes
    double x, y, z; // Variáveis a serem calculadas

    // Leitura da matriz dos coeficientes
    cout << "Digite os coeficientes do sistema (3x3):" << endl;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            cin >> a[i][j];
        }
    }

    // Leitura do vetor de constantes
    cout << "Digite os termos constantes (vetor b):" << endl;
    for (int i = 0; i < 3; ++i) {
        cin >> b[i];
    }

    // Cálculo do determinante D da matriz dos coeficientes
    double D = a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) -
               a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0]) +
               a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);

    // Verifica se o determinante é zero
    if (D == 0) {
        cout << "O sistema não possui solução única." << endl;
        return 0; // Finaliza o programa
    }

    // Cálculo do determinante D_x
    double D_x = b[0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1]) -
                 a[0][1] * (b[1] * a[2][2] - b[2] * a[1][2]) +
                 a[0][2] * (b[1] * a[2][1] - b[2] * a[1][1]);

    // Cálculo do determinante D_y
    double D_y = a[0][0] * (b[1] * a[2][2] - b[2] * a[1][2]) -
                 b[0] * (a[1][0] * a[2][2] - a[1][2] * a[2][0]) +
                 a[0][2] * (a[1][0] * b[2] - b[1] * a[2][0]);

    // Cálculo do determinante D_z
    double D_z = a[0][0] * (a[1][1] * b[2] - b[1] * a[2][1]) -
                 a[0][1] * (a[1][0] * b[2] - b[1] * a[2][0]) +
                 b[0] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);

    // Cálculo das variáveis x, y e z
    x = D_x / D;
    y = D_y / D;
    z = D_z / D;

    // Exibindo os resultados
    cout << fixed << setprecision(2);
    cout << "Solução: x = " << x << ", y = " << y << ", z = " << z << endl;

    return 0;
}
