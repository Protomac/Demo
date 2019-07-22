clear;
pkg load image;

var = argv();

img = imread(var{1});
# imshow(img);
# uint8 (new_matrix);
x = roicolor(img, 0, 245);
# imshow(x);

for a=1:size(x,1)
  for b=1:size(x,2)
      if x(a,b)
         new_matrix(a,b)=1;
      else
          new_matrix(a,b)=0;
      end
   end
end

#disp ("new_matrix after converting type is"), disp(typeinfo (new_matrix));

imshow(new_matrix);
reqdRow = 0;
temp = size(var, 1) - 1;
for x = 2: temp
  if (rem (x, 2) == 0)
    isReqd = "true";
    for i=str2num(var{x}):str2num(var{x+1})
      for j=1:size(new_matrix,2)
        if !(new_matrix(i,j)) # if value is black -> 0
           isReqd = "false";
        end
      end
    end
    if ( strcmp (isReqd, "true"))
      reqdRow = x/2;
    end
  end
end

#disp("is this the required row: "), disp(isReqd)
disp(reqdRow)