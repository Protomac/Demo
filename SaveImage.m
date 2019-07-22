clear;
pkg load image;
var = argv();
#path = "./app/controllers/imageProcessing/";
i = 1;
blackRange = 160;
#LocateImg = strcat(path, var{1})
img = imread(var{1});

function result = percentToCoord (val, total)
  result = val * total;
  result = result / 100;
  result = floor (result);
endfunction

row.min = percentToCoord (str2num(var{3}), size(img, 1)) #270; #var{3}
row.max = percentToCoord (str2num(var{4}), size(img, 1)) #305; #var{4}
col.min = percentToCoord (str2num(var{5}), size(img, 2)) #160;#var{5}
col.max = percentToCoord (str2num(var{6}), size(img, 2)) #1080;#var{6}


for a=row.min:row.max
  j = 1;
  for b=col.min:col.max
    extractedImg(i,j)=img(a,b);
    j++;
  endfor
  i++;
endfor
#temp = strcat(path, var{2})
imwrite (extractedImg, var{2});
disp(size(img, 1)); #row Size
disp(size(img, 2)); #col Size