//
//  MyView.m
//  jiutiao
//
//  Created by 安 on 18/1/8.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyView.h"
#import "UIImageView+WebCache.h"

@implementation MyView

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/
-(instancetype)initWinthMyView
{
  if(self = [super init]){
    _lable = [[UILabel alloc]initWithFrame:CGRectMake(120, 10,200 , 40)];
    _lable1 = [[UILabel alloc]initWithFrame:CGRectMake(120, 40, 200, 40)];
    _img = [[UIImageView alloc]initWithFrame:CGRectMake(0, 0, 120, 120)];
    [self addSubview:_lable];
    [self addSubview:_lable1];
    [self addSubview:_img];
    
    
  }
  return self;
}

-(void)setName:(NSString *)name
{
  self.lable.text = name;
}
-(void)setTitle:(NSString *)title
{
  
  _lable1.text = title;
}
-(void)setIcon:(NSString *)icon
{
  
  [_img sd_setImageWithURL:[NSURL URLWithString:icon] placeholderImage:[UIImage imageNamed:@"jia"] completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, NSURL *imageURL) {
    [[SDImageCache sharedImageCache] setValue:nil forKey:@"memCache"];
    
  }];
 }


@end
