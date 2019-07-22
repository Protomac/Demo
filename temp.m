clear;
pkg load image;

#var = argv();

img = imread("./harsh2.jpeg");
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

imshow(img);