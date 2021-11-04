

var table1 = '';
var table2 = '';
var rows = 7;
var cols = 8;
var ind_runs = [110 + 151 + 210, 20 + 20 + 20, 111 + 152 + 144, 14.5 + (17 + (5.0 / 6)) + 20]
var pak_runs = [189 + 148 + 135 + 152, 39 + 17 + (5 / 6) + 18 + (4 / 6), 147 + 144 + 134 + 151, 80]
var nam_runs = [115 + 98 + 144, 20 + 20 + 19 + (1.0 / 6), 109 + 189 + 160, 60]
var scot_runs = [156 + 109 + 60, 20 + 20 + 20, 172 + 190 + 115, 40 + 19 + (1.0 / 6)]
var nz_runs = [111 + 172 + 134, 20 + 20 + 14.5, 110 + 156 + 135, 40 + 18 + (4.0 / 6)]
var afg_runs = [144 + 160 + 147 + 190, 80, 210 + 98 + 148 + 60, 59 + 10 + (2.0 / 6)]
var ban_runs = [84 + 124 + 139 + 171 + 73, 20 + 20 + 20 + 20 + 20, 86 + 126 + 142 + 172 + 78, 20 + 13.5 + 14 + (1.0 / 6) + 18 + (5.0 / 6) + 6 + (2 / 6)]
var eng_runs = [163 + 126 + 126 + 56, 20 + 8 + (2.0 / 6) + 11 + (4.0 / 6) + 14 + (1.0 / 6), 124 + 125 + 55 + 137, 80]
var wi_runs = [55 + 143 + 142, 20 + 20 + 20, 139 + 56 + 144, 20 + 26 + (4.0 / 6)]
var sa_runs = [118 + 144 + 86 + 146, 20 + 38 + 13.5 + (1.0 / 6), 121 + 143 + 142 + 84, 79 + (4.0 / 6)]
var aus_runs = [121 + 125 + 155 + 78, 37 + 19 + (4.0 / 6) + 6 + (2 / 6), 154 + 126 + 118 + 73, 51 + (4.0 / 6) + 20]
var sl_runs = [172 + 137 + 154 + 142, 78 + (5.0 / 6), 171 + 155 + 146 + 163, 20 + 20 + 19 + 17 + (5.0 / 6)]



var india_nrr = (ind_runs[0] / ind_runs[1]) - (ind_runs[2] / ind_runs[3])

var pak_nrr = (pak_runs[0] / pak_runs[1]) - (pak_runs[2] / pak_runs[3])

var scot_nrr = (scot_runs[0] / scot_runs[1]) - (scot_runs[2] / scot_runs[3])

var nam_nrr = (nam_runs[0] / nam_runs[1]) - (nam_runs[2] / nam_runs[3])

var nz_nrr = (nz_runs[0] / nz_runs[1]) - (nz_runs[2] / nz_runs[3])

var afg_nrr = (afg_runs[0] / afg_runs[1]) - (afg_runs[2] / afg_runs[3])

var ban_nrr = (ban_runs[0] / ban_runs[1]) - (ban_runs[2] / ban_runs[3])

var eng_nrr = (eng_runs[0] / eng_runs[1]) - (eng_runs[2] / eng_runs[3])

var wi_nrr = (wi_runs[0] / wi_runs[1]) - (wi_runs[2] / wi_runs[3])

var sa_nrr = (sa_runs[0] / sa_runs[1]) - (sa_runs[2] / sa_runs[3])

var aus_nrr = (aus_runs[0] / aus_runs[1]) - (aus_runs[2] / aus_runs[3])

var sl_nrr = (sl_runs[0] / sl_runs[1]) - (sl_runs[2] / sl_runs[3])
const india = ['india', 3, 1, 2, 0, 0, 2, india_nrr]
const pak = ['pak', 4, 4, 0, 0, 0, 8, pak_nrr]
const nz = ['nz', 3, 2, 1, 0, 0, 4, nz_nrr]
const nam = ['nam', 3, 1, 2, 0, 0, 4, nam_nrr]
const scot = ['scot', 3, 0, 3, 0, 0, 0, scot_nrr]
const afg = ['afg', 4, 2, 2, 0, 0, 4, afg_nrr]
const aus = ['aus', 3, 2, 1, 0, 0, 4, aus_nrr]
const sl = ['sl', 4, 1, 3, 0, 0, 2, sl_nrr]
const sa = ['sa', 4, 3, 1, 0, 0, 6, sa_nrr]
const wi = ['wi', 3, 1, 2, 0, 0, 2, wi_nrr]
const eng = ['eng', 4, 4, 0, 0, 0, 8, eng_nrr]
const ban = ['ban', 4, 0, 4, 0, 0, 0, ban_nrr]
teams1 = [india, pak, nz, nam, scot, afg]
teams2 = [aus, sl, wi, eng, sa, ban]

teams1 = teams1.sort(function (a, b) { return -a[7] + b[7] })
teams2 = teams2.sort(function (a, b) { return -a[7] + b[7] })
teams1 = teams1.sort(function (a, b) { return -a[6] + b[6] })
teams2 = teams2.sort(function (a, b) { return -a[6] + b[6] })
table1 += '<tr>';
table1 += '<td>' + 'teams' + '</td>';
table1 += '<td>' + 'played' + '</td>';
table1 += '<td>' + 'won' + '</td>';
table1 += '<td>' + 'lost' + '</td>';
table1 += '<td>' + 'tied' + '</td>';
table1 += '<td>' + 'NR' + '</td>';
table1 += '<td>' + 'points' + '</td>';
table1 += '<td>' + 'nrr' + '</td>';

table1 += '</tr>';


var z = 0;
for (r = 1; r < rows; r++) {
    table1 += '<tr>';
    for (var c = 1; c <= cols; c++) {

        table1 += '<td>' + teams1[z][c - 1];
    }
    z += 1;
    table1 += '</tr>';
}
table2 += '<tr>';
table2 += '<td>' + 'teams' + '</td>';
table2 += '<td>' + 'played' + '</td>';
table2 += '<td>' + 'won' + '</td>';
table2 += '<td>' + 'lost' + '</td>';
table2 += '<td>' + 'tied' + '</td>';
table2 += '<td>' + 'NR' + '</td>';
table2 += '<td>' + 'points' + '</td>';
table2 += '<td>' + 'nrr' + '</td>';
table2 += '</tr>';
table2 += '<br>';
z = 0;
for (r = 1; r < rows; r++) {
    table2 += '<tr>';
    for (var c = 1; c <= cols; c++) {

        table2 += '<td>' + teams2[z][c - 1] + '</td>';
    }
    z += 1;
}
document.write('<table border=2>' + table1 + '</table>' + '<table border=2>' + table2 + '</table>');


