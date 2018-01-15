//
//  MyView.h
//  jiutiao
//
//  Created by 安 on 18/1/8.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface MyView : UIView
@property (nonatomic,strong) NSString* name;
@property (nonatomic,strong) NSString* title;
@property (nonatomic,strong) UILabel * lable;
@property (nonatomic,strong) UILabel * lable1;
@property (nonatomic,strong) UIImageView * img;

-(instancetype) initWinthMyView;

@end
