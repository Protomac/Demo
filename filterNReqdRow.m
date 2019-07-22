clear;
pkg load image;

img = imread("survivedColumn.jpg");
# imshow(img);
# uint8 (filteredImg);

x = roicolor(img, 0, 235);
# imshow(x);

for a=1:size(x,1)
  for b=1:size(x,2)
      if x(a,b)
         filteredImg(a,b)=1;
      else
          filteredImg(a,b)=0;
      end
   end
end

disp ("filteredImg after converting type is"), disp(typeinfo (filteredImg));

imshow(filteredImg);
isReqd = "true";
for i=166:183 #var{x}:var{x+1}
  for j=1:size(filteredImg,2)
      if !(filteredImg(i,j)) # if value is black -> 0
         isReqd = "false";
      end
#      disp(filteredImg(i,j));
   end
end

disp("is this the required row: "), disp(isReqd)