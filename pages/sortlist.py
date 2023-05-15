import pandas as pd

# Annahme: Die Daten sind in einem DataFrame namens "df" gespeichert
# Du kannst deinen eigenen DataFrame entsprechend anpassen

# Sortiere die Zeilen nach der Spalte "column-cell-tier" in absteigender Reihenfolge
df_sorted = df.sort_values(by='column-cell-tier', ascending=False)

# Definiere die gewünschte Reihenfolge der Werte in der Spalte "column-cell-tier"
custom_order = ['S+', 'S', 'A', 'B', 'C', 'D', 'E']

# Wandle die Spalte "column-cell-tier" in eine kategorische Variable mit der benutzerdefinierten Reihenfolge um
df_sorted['column-cell-tier'] = pd.Categorical(df_sorted['column-cell-tier'], categories=custom_order, ordered=True)

# Sortiere den DataFrame nun nach der Spalte "column-cell-tier" unter Berücksichtigung der benutzerdefinierten Reihenfolge
df_sorted = df_sorted.sort_values(by='column-cell-tier')

# Zeige den sortierten DataFrame an
print(df_sorted)
