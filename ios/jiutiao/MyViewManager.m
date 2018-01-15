//
//  MyViewManager.m
//  jiutiao
//
//  Created by 安 on 18/1/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyViewManager.h"
#import "MyView.h"
@implementation MyViewManager
RCT_EXPORT_MODULE();
-(UIView*) view
{
  return [[MyView alloc]initWinthMyView];
}
RCT_EXPORT_VIEW_PROPERTY(name , NSString);
RCT_EXPORT_VIEW_PROPERTY(title , NSString);
RCT_EXPORT_VIEW_PROPERTY(icon , NSString);
@end
